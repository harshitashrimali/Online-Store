import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private router: Router, private location: Location, private userService: UserService ) { }
  public user: UserInterface = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() { }

  
  onLogin(formLogin){
    let loginData = formLogin.value;
    let result = this.userService.login(loginData);
    result.then(response => {
      this.router.navigate(['/']);
    })
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


}