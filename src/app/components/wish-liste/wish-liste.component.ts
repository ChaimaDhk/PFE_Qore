import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-wish-liste',
  templateUrl: './wish-liste.component.html',
  styleUrls: ['./wish-liste.component.css']
})
export class WishListComponent implements OnInit {
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
  
  constructor(private formBuilder:FormBuilder ,private eventsService:EventsService ,private reservationService:ReservationsService) { }

  ngOnInit(): void {  
    this.Reservations= JSON.parse(localStorage.getItem("Reservations") || "[]");
   
  this.ReservationForm =this.formBuilder.group({
    qteRes :[''] 
    })
  }
  
  deleteReservation(id:any){
   
     for (let i = 0; i < this.Reservations.length; i++) {
      if (this.Reservations[i].id == id){
        console.log(this.Reservations[i].id);
        
         this.Reservations.splice(this.findPos(id),1)
          
    }
         }
          localStorage.setItem("Reservations", JSON.stringify(this.Reservations));
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
               this.d=this.event;
                 
        let k =this.Reservations[i];
        console.log(this.event.price);
        console.log(c.qteRes);
        let total=this.event.price*c.qteRes;
        console.log(total);
        
          this.reservationService.addReservation(c,k,total).subscribe(
            (data)=>{
            console.log(data.message);
          })
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
