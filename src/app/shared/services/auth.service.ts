import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;
  userStatus: string;
  userChecker: boolean;

  constructor(private _afAuth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _router: Router) { }

  isLogin(): boolean {
    return this.userChecker;
  }

  signUp(email: string, password: string): void {
    this._afAuth.createUserWithEmailAndPassword(email, password)
      .then((userResponse) => {
        const user = {
          id: userResponse.user.uid,
          userName: userResponse.user.email,
          role: 'user'
        };
        this._firestore.collection('users').add(user)
          .then(user => {
            user.get().then(value => {
              this.currentUser = value.data();
              this._router.navigate(['/']);
            });
          })
          .catch(err => {
            console.log('Add to firestore', err);
          });
      })
      .catch(err => {
        console.log('Create user', err);
      });
  }

  login(email: string, password: string) {
    console.log(email, password)
    this._afAuth.signInWithEmailAndPassword(email, password)
      .then(data => {
        this._firestore.collection('users').ref.where('userName', '==', data.user.email)
          .onSnapshot(snap => {
            snap.forEach(userRef => {
              this.currentUser = userRef.data();
              if (userRef.data().role !== 'admin') {
                this._router.navigate(['/']);
              } else {
                this.userChecker = true;
                this._router.navigate(['/admin']);
              }
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }


  logOut(): void {
    this._afAuth.signOut()
      .then(() => {
        this.currentUser = null;
        this.userChecker = false;
        this._router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      })
  }


}
