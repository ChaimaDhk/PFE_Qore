import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  user:any;
  constructor(private router:Router , private userService : UsersService) { }

  ngOnInit(): void {
    let userConnect = JSON.parse(localStorage.getItem("userConnect")||"[]");
    console.log(userConnect._id)
    this.user=userConnect._id
    }
  updateUser(id:any){
     
    this.router.navigate([`edit/${ this.user}`]);

  }


}
