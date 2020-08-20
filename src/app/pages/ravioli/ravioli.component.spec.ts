import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavioliComponent } from './ravioli.component';

describe('RavioliComponent', () => {
  let component: RavioliComponent;
  let fixture: ComponentFixture<RavioliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavioliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
