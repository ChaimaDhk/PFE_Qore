import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { UsersService } from 'src/app/services/users.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-client-wish-list',
  templateUrl: './client-wish-list.component.html',
  styleUrls: ['./client-wish-list.component.css']
})
export class ClientWishListComponent implements OnInit {
  Reservations:any;
  reserver:any;
  reservation: any = {};
  event:any;
  ids:any;
  events:any;
  totalePrice:any
  c:any;
  d:any;
  ReservationForm !:FormGroup;
  qteRes:any;
  i=1;
  e:any;
  totalPrice:any;
  nom:any;
  image:any;
  userConnect:any;
  constructor(private formBuilder:FormBuilder,private userService:UsersService ,private eventsService:EventsService ,private reservationService:ReservationsService) { }

  ngOnInit(): void {  
    this.userConnect= JSON.parse(localStorage.getItem("userConnect") || "[]");
    this.Reservations= JSON.parse(localStorage.getItem("Reservations") || "[]");
   
  this.ReservationForm =this.formBuilder.group({
    qteRes :[''] 
    })
    
  }
  
  deleteReservation(id:any){
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
  
   
     for (let i = 0; i < this.Reservations.length; i++) {
      if (this.Reservations[i].id == id){
        console.log(this.Reservations[i].id);
        
         this.Reservations.splice(this.findPos(id),1)
          
    }  swalWithBootstrapButtons.fire(
      'Deleted!',
      'this event has been deleted.',
      'success'
    )
         }
          localStorage.setItem("Reservations", JSON.stringify(this.Reservations));
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
          for (let i = 0; i < this.Reservations.length; i++) {
            if (this.Reservations[i].id ==id){
              pos= i;
            }
            }
            return pos;
        }
     
        ConfirmReservation(c:any, id:any){
  
     for (let i = 0; i < this.Reservations.length; i++) {
      if (this.Reservations[i].id == id){
        console.log( id);
        console.log(this.Reservations[i].id );
      console.log(c);
      
            this.eventsService.getEvent( this.Reservations[i].idEvent).subscribe(
              (data)=>{
                this.event =data.event;
                console.log(this.event);
              console.log(this.event.Qte < c.qteRes);
              
               if (this.event.Qte < c.qteRes){
                 alert("we have just " +this.event.Qte+" places" )
               } else{
                 
        let k =this.Reservations[i];
        console.log(this.event.price);
        console.log(c.qteRes);
        let total=this.event.price*c.qteRes;
        console.log(total);
        
          this.reservationService.addReservation(c,k,total).subscribe(
            (data)=>{
            console.log(data.message);
            if (data.message == "added reservation")
            { Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'reserved',
              showConfirmButton: false,
              timer: 1500
            })} else{ alert(data.message)}
            if (data.message="added reservation"){
            this.userService.reservation(this.userConnect).subscribe(
              (data)=>{
             console.log(data.message);
              })
             }
          }) 
        } 
            })}
          }
        }

        liste(id:any){
    this.eventsService.getEvent(id).subscribe(
      (data)=>{
        this.event =data.event;
        console.log(this.event);
       this.d=this.event;
        }) 
       
      }

}
