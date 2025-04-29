import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  id:any;
  events:any;
  event:any;
  userConnect:any;
  idUser:any;
  reservation:any;
  ReserverForm !:FormGroup;
  idEvent:any;
  isDisplay:any; 
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private eventsService:EventsService ) { }


  ngOnInit() {
     
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   
    this.eventsService.getEvent(this.id).subscribe(
      (data)=>{
        this.event =data.event;
        console.log(this.event);
      
        if (this.event.Qte != "0") {
          this.isDisplay = !this.isDisplay;
        }
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
   
    // this.events=JSON.parse(localStorage.getItem("events") || "[]");

    // for (let i = 0; i < this.events.length; i++) {
    //   if (this.events[i].id == this.id) {
    //     this.event =this.events[i];
    //     console.log('my event' ,this.event);
    //   }
      
    // }
   
  }
  
 AddToCart(c:any){

let Reservations = JSON.parse(localStorage.getItem("Reservations")||"[]");
  let idRes = JSON.parse(localStorage.getItem("idRes")||"1");
   c.id=idRes;
   console.log(c);
   let d=this.event
  Reservations.push(c);
  localStorage.setItem("Reservations",JSON.stringify(Reservations));
  localStorage.setItem("idRes",idRes+1);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Added to wish list',
    showConfirmButton: false,
    timer: 1500
  })
 
}

}