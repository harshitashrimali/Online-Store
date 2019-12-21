import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private userService:UserService) { }
  public user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };
  public isError = false;
  public msgError = '';
  ngOnInit() { }

onRegister(formRegister){
    let registerData = formRegister.value;
    let result = this.userService.register(registerData);
    result.then(response => {
      let uid = response.user.uid;
      this.userService.createUser(uid, registerData);
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