import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {
  category: any = {};
  CategoryForm!:FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService) { }

  ngOnInit(): void {
 
    this.CategoryForm =this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required] 
    });
   }
   addCategory(c:any){
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.CategoryForm.invalid) {
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
   console.log(c);
   
    this.categoryService.addCategory(c).subscribe(
      (data)=>{
      console.log(data.message);
      })
     
    
    }
    get f() { return this.CategoryForm.controls; }
  
  
  onReset() {
    this.submitted = false;
    this.CategoryForm.reset();
  }

}
