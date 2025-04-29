import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-visiteur-event',
  templateUrl: './visiteur-event.component.html',
  styleUrls: ['./visiteur-event.component.css']
})
export class VisiteurEventComponent implements OnInit {
  @Input() childEvent:any;
  @Output() newEvents = new EventEmitter;
  events:any;
  id:any;
  event:any;
  constructor(private eventsService:EventsService ,private router:Router,private activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {
 
   

  }
  
    //declaration de la fonction
    displayEvents(id:any){
      this.router.navigate([`event/${id}`]);
  
    }
    
    
  
  
   panier(id:any){
    
      let catNumbers = JSON.parse(localStorage.getItem("catNumbers")||"0");
       localStorage.setItem("catNumbers",catNumbers+1) ;
    
  }
}
