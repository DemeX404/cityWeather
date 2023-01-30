import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bd_username: string = "admin"
  bd_password: string = "admin"
  credentials: boolean

  constructor(private router: Router) {
    this.credentials = false
  }

  ngOnInit(): void { }

  login(form: NgForm) {
    let username = form.value.username
    let password = form.value.password
    
    if (username == this.bd_username && password == this.bd_password) {
      console.log(form.value)
      this.router.navigate(['home'])
    } else {
      this.credentials = true
      this.router.navigate([''])
    }
  }

}
