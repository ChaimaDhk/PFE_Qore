import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-contact-visiteur',
  templateUrl: './contact-visiteur.component.html',
  styleUrls: ['./contact-visiteur.component.css']
})
export class ContactVisiteurComponent implements OnInit {
  contacterForm !:FormGroup;
  submitted:any;
  constructor(private formBuilder :FormBuilder, private router:Router, private MessegesService : MessagesService ) { }
  ngOnInit(): void {
    this.contacterForm =this.formBuilder.group({
      name:['',Validators.required],
    
      email:['',Validators.required],
    
      message:['',Validators.required]
    });
  }
  contact(c : any){
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.contacterForm.invalid) {
        return;
    }
 

 this.MessegesService.contact(c).subscribe(
  (data)=>{
  console.log(data.message);
  })
 
// display form values on success
 

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your message has send',
    showConfirmButton: false,
    timer: 1500
  })
}
get f() { return this.contacterForm.controls; }


onReset() {
    this.submitted = false;
    this.contacterForm.reset();
}

}
