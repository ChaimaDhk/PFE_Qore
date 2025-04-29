import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display-clients',
  templateUrl: './display-clients.component.html',
  styleUrls: ['./display-clients.component.css']
})
export class DisplayClientsComponent implements OnInit {
  users:any;
  constructor(private router:Router , private userService : UsersService) { }


  ngOnInit(): void {
    // this.utilisateurs= JSON.parse(localStorage.getItem("utilisateurs") || "[]");
    this.userService.getUsers().subscribe(
      (data)=>{
        console.log(data.users);
       
      this.users = data.users;

  })
  }

deleteUser(id:any){
 
  this.userService.deleteUser(id).subscribe(
    (data)=>{
      console.log(data.message);
      this.userService.getUsers().subscribe(
        (data)=>{
          console.log(data.users);
        this.users = data.users;
    })
    }
  )
}
    findPos(id:any){
      let pos;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id ==id){
          pos= i;
        }
        }
        return pos;
    }
  
}
