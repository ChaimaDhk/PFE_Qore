import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: any = {};
 CategoryForm!:FormGroup;
 submitted = false;
  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService ) { }

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
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CategoryForm.value, null, 4));
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
 



