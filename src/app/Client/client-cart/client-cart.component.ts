import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.css']
})
export class ClientCartComponent implements OnInit {
  submitted = false;
  reservations:any=[];
  reserve:any=[];
  userConnect:any;
  reservation:any;
  events:any =[];
  reserved:any=[];
  event:any;
  res:any;
  dif:any;
  constructor(private reservationService:ReservationsService,private eventsService:EventsService,private router:Router) { }

  ngOnInit(): void {
    this.userConnect= JSON.parse(localStorage.getItem("userConnect") || "[]");
    
    
    this.reservationService.getReservations().subscribe(
      (data)=>{
        console.log(data.reserved_events);
      this.reservations = data.reserved_events;
      console.log( this.reservations);
      for (let i = 0; i < this.reservations.length; i++) {
        if(this.reservations[i].idUser==this.userConnect._id)
        this.reserve.push(this.reservations[i])
        console.log(this.reservations[i].qteRes);
      } console.log(this.reserve);
     
     
      
      for (let i = 0; i< this.reserve.length; i++) {  
       this.eventsService.getEvent(this.reserve[i].idEvent).subscribe(
        (data)=>{
      
        this.events = data.event;
      
        this.reserved.push({'event':this.events,'qte':Number(this.reserve[i].qteRes),'idRes':this.reserve[i]._id});
       
       
     })
     
      } console.log('yalaaaa',this.reserved);
     
  })
  }
  deleteReservation(id:any,qte:any){
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
  
    this.reservationService.deleteReservation(id,qte).subscribe(
      (data)=>{
        console.log(data.message);
          this.reservationService.getReservations().subscribe(
            (data)=>{
              console.log(data.reserved_events);
            this.reservations = data.reserved_events;
            window.location.reload()
          })  })
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
  updateQte(id:any,qte:any){
    this.submitted = true;


 this.reservationService.getReservations().subscribe(
  (data)=>{
    console.log(data.reserved_events);
  this.reservations = data.reserved_events;
})
 for (let i = 0; i < this.reservations.length; i++) {
  this.reservations[i]._id=id;
  this.res=this.reservations[i]
 } console.log(this.res);
 this.eventsService.getEvent(this.res.idEvent).subscribe(
  (data)=>{
    this.event =data.event;
    console.log(this.event);
 
 console.log( qte - (this.res.qteRes) );
   this.dif=qte - (this.res.qteRes);
   console.log(this.dif);
   console.log(this.event.Qte);
   
   if (this.event.Qte < this.dif )
   {
    alert("we have just "+this.event.Qte+" places left")
}   
   
   else{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Edited',
      showConfirmButton: false,
      timer: 1500
    })
    this.reservationService.updateQte(id,qte).subscribe(
      (data)=>{
        console.log(data.message);
     
      }) }
    })
  }
  invoice(){
    this.router.navigate([`client/invoice`]);
  }
  }
