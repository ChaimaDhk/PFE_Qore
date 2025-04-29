import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
id:any;
user:any;
editForm!: FormGroup;
submitted = false;
  constructor(private formBuilder :FormBuilder,private userService:UsersService,private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    this.userService.getUser(this.id).subscribe(
      (data)=>{
        this.user =data.user;
      })
      this.editForm = this.formBuilder.group({
     
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        tel: ['', Validators.required, Validators.minLength(8)],
       
        email: ['', [Validators.required, Validators.email]],
       
    });
  
  }
  update(c:any){
  this.submitted = true;

  // stop here if form is invalid
  if (this.editForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value, null, 4));
  }
get f() { return this.editForm.controls; }


onReset() {
    this.submitted = false;
    this.editForm.reset();
}

}
