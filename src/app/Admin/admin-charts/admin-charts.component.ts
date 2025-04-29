import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
 
  
export class AdminChartsComponent implements OnInit {
  users:any;
  events:any;
  messages:any;
  user=0;
  events1:any=[];
  event:any;

  message:any;
  chart!: any[]
  productSales!: any[]
  productSalesMulti!: any[]

  view: any[] = [700, 370];

  // options
  
  constructor(private reservationService:ReservationsService, private userService:UsersService,private MessegesService:MessagesService,private eventService:EventsService) 
  {  }

  
    ngOnInit(): void {
  
     
     
      this.userService.getUsers().subscribe(
        (data)=>{
          console.log(data.users);
         
        this.users = data.users;
       
        
        for (let i = 0; i < this.users.length; i++) {
       
        if(this.users[i].role == 'user'){
          this.user == this.user++;
           
        }
        console.log(this.user)
      }
       }) 
  
   
  
    this.MessegesService.getMessages().subscribe(
      (data)=>{
        console.log(data.messages);
      this.messages = data.messages;
      this.message=this.messages.length;
  })
     
   
  
   
  
  
    this.eventService.getEvents().subscribe(
      (data)=>{
        console.log(data.events);
      this.events = data.events;
      this.event=this.events.length;
     
      this.reservationService.getReservations().subscribe(
        (data)=>{
          console.log(data.reserved_events);})
    
  
  for (let i = 0; i < this.events.length; i++) {
    this.events1.push({'name':this.events[i].name,'value':Number(this.events[i].Qte)}); 
    Object.assign(this, { productSales!:this.events1});
  } console.log(this.events1);
 
   return this.event; 


})

 
 }

 //chart
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;
  animations: boolean = true; // animations on load
  colorScheme = {
    domain: ['#561010', '#971c1c', '#d72828', '#e36868', '#25706F']
  };

  }
  