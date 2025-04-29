import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { OldPwdValidators } from '../../components/old-pwd.validators';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-client-update-pwd',
  templateUrl: './client-update-pwd.component.html',
  styleUrls: ['./client-update-pwd.component.css']
})
export class ClientUpdatePwdComponent implements OnInit {
pass:any;
submitted = false;
  form1!: FormGroup; 
  userConnect:any;
  constructor(private formBuilder :FormBuilder,private userService:UsersService){ }
  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
    this.form1 =this.formBuilder.group({
      'oldPwd': ['',Validators.required],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }

  get oldPwd(){
    return this.form1.get('oldPwd');
  }

   get newPwd(){
    return this.form1.get('newPwd');
  }

   get confirmPwd(){
    return this.form1.get('confirmPwd');
  }
  updatePwd(form:any){
    this.submitted = true;

    this.userService.updatePwd(this.userConnect,form).subscribe(
      (data)=>{
        console.log(data.message);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Edited',
          showConfirmButton: false,
          timer: 1500
        })
    })
  }
}