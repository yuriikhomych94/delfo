import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,6}')]),
    password: new FormControl('', Validators.required)
  });

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
    password: new FormControl('', Validators.required)
  });

  isSignUpActive: boolean = true;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }


  public signUp(formData: FormData) {
    console.log(formData);
    this._auth.signUp(formData['email'], formData['password']);
  }

  public login(formData: FormData) {
    console.log(formData);
    this._auth.login(formData['email'], formData['password']);
  }

  public check() {
    this.isSignUpActive = !this.isSignUpActive;
  }

}
