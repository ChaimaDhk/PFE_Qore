import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-visiteur-events',
  templateUrl: './visiteur-events.component.html',
  styleUrls: ['./visiteur-events.component.css']
})
export class VisiteurEventsComponent implements OnInit {
  events:any;
  events1:any=[];
  index:any;
    constructor(private eventsService:EventsService ) { }
  
    ngOnInit(): void {
    //   this.events=JSON.parse(localStorage.getItem("events") || "[]");
    // }
    this.eventsService.getEvents().subscribe(
      (data)=>{
       
      this.events = data.events;
      console.log("events",this.events);
      
      
      
  })  
  
  
  // for (let i = 0; i < this.events.length; i++) {
  //   while (i<3) {
  //     this.events1.push(this.events[i]);
  //   }
  // }
   
    
  
    
  }
    update(x:any){
      this.events=x;
    }
   
    
}
