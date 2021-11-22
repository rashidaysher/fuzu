import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input:any;

  constructor(private userService: UserService, private routes:Router) { }

  ngOnInit(): void {
    this.input= {
      email: '',
      password: '',
    };
  }

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      (_response: any) =>{
        
        this.routes.navigate(["/dashboard"]);
      },
      (error:any) =>{
        console.log('error', error);
      }
    );
  }

}
