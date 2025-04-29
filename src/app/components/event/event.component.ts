import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() childEvent:any;
  @Output() newEvents = new EventEmitter;
  events:any;
  id:any;
  event:any;
  constructor(private eventsService:EventsService ,private router:Router,private activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {
    this.cart();
   

  }
  
    //declaration de la fonction
    displayEvents(id:any){
      this.router.navigate([`client/displayEvents/${id}`]);
  
    }
    
    

  cart(){
    let catNumbers = JSON.parse(localStorage.getItem("catNumbers")||"0");
    if (catNumbers){
      document.querySelector(".fa fa-shopping-cart span")?.textContent !=catNumbers;
    }

  }
   panier(id:any){
    
      let catNumbers = JSON.parse(localStorage.getItem("catNumbers")||"0");
       localStorage.setItem("catNumbers",catNumbers+1) ;
    
  }
   
}

