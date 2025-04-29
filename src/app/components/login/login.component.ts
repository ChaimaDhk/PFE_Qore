import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  findedUser:any;
  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    localStorage.removeItem("userConnect");
    localStorage.removeItem("Reservations");
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  

  login(){
    console.log("user from ts",this.user);
    
    this.usersService.login(this.user).subscribe(
      (data)=> {
          console.log(data.findedUser);
          this.findedUser = data.findedUser;
        if ( this.findedUser == "Check you email") {
          alert("check your email")
        } else if ( this.findedUser== "check your password") {
          alert("check your password")
        }else
       {
          console.log(this.findedUser.role);
          localStorage.setItem("userConnect",JSON.stringify(this.findedUser));

       
          switch (this.findedUser.role) {
                    case "admin":
                      this.router.navigate(['dashbord']);
                      break;
            
                      case "user":
                        this.router.navigate(['client/home']);
                        break;
                
                  }
                }
          
      })

  }
  goTo(){
    this.router.navigate(['signUp']);
  }

}
