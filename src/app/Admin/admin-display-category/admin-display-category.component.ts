import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-admin-display-category',
  templateUrl: './admin-display-category.component.html',
  styleUrls: ['./admin-display-category.component.css']
})
export class AdminDisplayCategoryComponent implements OnInit {
  category:any;
  constructor(private router:Router ,private CategorysService:CategoryService ) { }

  
  ngOnInit(): void {
    // this.messages= JSON.parse(localStorage.getItem("messages") || "[]");
    this.CategorysService.getCategorys().subscribe(
      (data)=>{
        console.log(data.categorys);
      this.category = data.categorys;
  })
  }
  
  deleteCategory(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({

      title: 'Are you sure?',
      text: "You won't to delete this category!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      
   
      if (result.isConfirmed) {
        this.CategorysService.deleteCategory(id).subscribe(
          (data)=>{
            console.log(data.message);})
       
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'this category has been deleted.',
          'success'
        )
       
        this.CategorysService.getCategorys().subscribe(
          (data)=>{
            console.log(data.categorys);
          this.category = data.categorys;
      })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your category is safe :)',
          'error'
        )
      }
    })
 
       
  
  }
  GoToAddCategory(){
    this.router.navigate([`dashbord/addCategory`]);
  }
    

}
