import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events:any;
events1:any=[];
index:any;
  constructor(private eventsService:EventsService ) { }

  ngOnInit(): void {
  
  this.eventsService.getEvents().subscribe(
    (data)=>{
     
    this.events = data.events;
    console.log("events",this.events);
    
    
    
})  



  

  
}
  update(x:any){
    this.events=x;
  }
 
  

}
