import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm !:FormGroup;
  submitted = false;
  constructor(private  formBuilder : FormBuilder, private router : Router,private UsersService:UsersService) { }
  ngOnInit(): void {
    this.addAdminForm =this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
  }
  Ajouter(c:any){
   this.submitted = true;
 
    // stop here if form is invalid
    if (this.addAdminForm.invalid) {
        return;
    }
  
    // display form values on success
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added',
      showConfirmButton: false,
      timer: 1500
    })
   
    this.UsersService.Ajouter(c).subscribe(
      (data)=>{
      console.log(data.message);
      }
    )
    
    }
    get f() { return this.addAdminForm.controls; }


onReset() {
    this.submitted = false;
    this.addAdminForm.reset();
}
}
