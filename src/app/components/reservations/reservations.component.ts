import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any=[];
  reserve:any=[];
  userConnect:any;
  events:any =[];
  reserved:any=[];
  constructor(private reservationService:ReservationsService,private eventsService:EventsService) { }

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
      } console.log(this.reserve);
      for (let i = 0; i< this.reserve.length; i++) {  
       this.eventsService.getEvent(this.reserve[i].idEvent).subscribe(
        (data)=>{
      
        this.events = data.event;
        console.log( this.events);
        this.reserved.push(this.events);
     })
     
      } console.log(this.reserved);
     
  })
  }

}
