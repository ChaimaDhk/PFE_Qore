import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-admin-display-events',
  templateUrl: './admin-display-events.component.html',
  styleUrls: ['./admin-display-events.component.css']
})
export class AdminDisplayEventsComponent implements OnInit {
  events:any;
  constructor(private router:Router , private eventsService : EventsService) { }

  ngOnInit(): void {
    //  this.events= JSON.parse(localStorage.getItem("events") || "[]");
    this.eventsService.getEvents().subscribe(
     (data)=>{
       console.log(data.events);
     this.events = data.events;
 })
    }
    //declaration de la fonction
    getEvent(id:any){
      this.router.navigate([`dashbord/displayEvent/${id}`]);
  
    }
     //declaration de la fonction
     updateEvent(id:any){
      this.router.navigate([`dashbord/editEvent/${id}`]);
  
    }
  
  deleteEvent(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({

      title: 'Are you sure?',
      text: "You won't to delete this event!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      
   
      if (result.isConfirmed) {
  
    this.eventsService.deleteEvent(id).subscribe(
      (data)=>{
        console.log(data.message);})
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'this event has been deleted.',
          'success'
        )
        this.eventsService.getEvents().subscribe(
          (data)=>{
            console.log(data.events);
          this.events = data.events;
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your event is safe :)',
        'error'
      )
    }
  })
  }
    findPos(id:any){
      let pos;
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].id ==id){
          pos= i;
        }
        }
        return pos;
    }
  GoToAddEvent(){
    this.router.navigate([`dashbord/addEvent`]);
  }
    

}
