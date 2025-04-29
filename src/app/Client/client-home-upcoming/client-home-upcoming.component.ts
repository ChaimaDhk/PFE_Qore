import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-client-home-upcoming',
  templateUrl: './client-home-upcoming.component.html',
  styleUrls: ['./client-home-upcoming.component.css']
})
export class ClientHomeUpcomingComponent implements OnInit {
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
      
      
        for (let i = 0; i < this.events.length; i++) {
          if (i<2) {
            this.events1.push(this.events[i]);
          }
         
         
          
        }
       
      
      console.log("events1", this.events1);
  
      
  })  
  
  
  
    
  
    
  }
    update(x:any){
      this.events=x;
    }
   
    
  
  }
  