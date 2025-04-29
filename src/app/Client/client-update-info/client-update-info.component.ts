import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-client-update-info',
  templateUrl: './client-update-info.component.html',
  styleUrls: ['./client-update-info.component.css']
})
export class ClientUpdateInfoComponent implements OnInit {

  id:any;
  user:any;
  users:any={};
  editForm!: FormGroup;
  submitted = false;
  userConnect:any;
    constructor(private router:Router,private formBuilder :FormBuilder,private userService:UsersService,private activatedRoute:ActivatedRoute,) { }
  
    ngOnInit(): void {
      this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
      this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
      this.userService.getUser(this.id).subscribe(
        (data)=>{
          this.user =data.user;
        })
        this.editForm = this.formBuilder.group({
       
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
 
         
      });
      this.userService.getUser(this.userConnect._id).subscribe(
        (data)=>{
          this.user =data.user;
          console.log("user is",this.user);
          
        })
    
    }
    update(c:any){
      
   
        this.users={
          "_id":this.userConnect._id,
          "user":this.editForm.value
        }
        console.log(this.users);
        
       

        this.userService.updateUser(this.users).subscribe(
          (data)=>{
            console.log(data.message);
          })
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.editForm.invalid) {
        return;
    }
  
    // display form values on success
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
    
  get f() { return this.editForm.controls; }
  
  
  onReset() {
      this.submitted = false;
      this.editForm.reset();
  }
  updatePass(){
    this.router.navigate([`client/updatePwd`]);
  }
  
}
