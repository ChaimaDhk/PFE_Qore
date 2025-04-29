import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-admin-display-users',
  templateUrl: './admin-display-users.component.html',
  styleUrls: ['./admin-display-users.component.css']
})
export class AdminDisplayUsersComponent implements OnInit {
  users:any;
  user:any=[{}];
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
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({

    title: 'Are you sure?',
    text: "You won't to delete this user/admin!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    
 
    if (result.isConfirmed) {

  this.userService.deleteUser(id).subscribe(
    (data)=>{
      console.log(data.message)})
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'this user/admin has been deleted.',
        'success'
      )
      this.userService.getUsers().subscribe(
        (data)=>{
          console.log(data.users);
        this.users = data.users;
    })
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your user/admin is safe :)',
      'error'
    )
  }
})
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
