import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { EventsService } from 'src/app/services/events.service';
import { AddEventComponent } from '../add-event/add-event.component';



@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.css']
})
export class DisplayEventsComponent implements OnInit {
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
     this.router.navigate([`admin/displayEvent/${id}`]);
 
   }
    //declaration de la fonction
    updateEvent(id:any){
     this.router.navigate([`admin/editEvent/${id}`]);
 
   }
 

 deleteEvent(id:any){
 
   this.eventsService.deleteEvent(id).subscribe(
     (data)=>{
       console.log(data.message);
       this.eventsService.getEvents().subscribe(
         (data)=>{
           console.log(data.events);
         this.events = data.events;
     })
     }
   )
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
   this.router.navigate([`admin/addEvent`]);
 }
   

}

 
 