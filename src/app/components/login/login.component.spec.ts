import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login.component';

describe('Test LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule, RouterTestingModule.withRoutes(
        [{path: 'home', component: HomeComponent}]
      )],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check wrong credentials', () => {
    let testForm = <NgForm>{
      value: {
          username: "Hello",
          password: "World"
      }
  }
    component.login(testForm)
    expect(component.credentials).toBeTrue();
  });

  it('Check correct credentials', () => {
    let testForm = <NgForm>{
      value: {
          username: "admin",
          password: "admin"
      }
  }
    component.login(testForm)
    expect(component.credentials).toBeFalse();
  });
  
});
