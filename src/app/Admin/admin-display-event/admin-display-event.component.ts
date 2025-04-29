import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-admin-display-event',
  templateUrl: './admin-display-event.component.html',
  styleUrls: ['./admin-display-event.component.css']
})
export class AdminDisplayEventComponent implements OnInit {

  id:any;
  events:any;
  event:any;
  userConnect:any;
  idUser:any;
  reservation:any;
  ReserverForm !:FormGroup;
  idEvent:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private eventsService:EventsService ) { }



  ngOnInit() {
     
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   
    this.eventsService.getEvent(this.id).subscribe(
      (data)=>{
        this.event =data.event;
        console.log(this.event);
      
    
    this.userConnect= JSON.parse(localStorage.getItem("userConnect") || "");
    console.log('my id',this.userConnect._id);
   
     this.ReserverForm =this.formBuilder.group({
      idUser:[this.userConnect._id],
      idEvent:[this.id],
      idEvents:[this.event],
     
     })
     
 
      
    
    });
    this.eventsService.getEvent(this.id).subscribe(
      (data)=>{
        this.event =data.event;
      })
   
  
   
  }
 

}
