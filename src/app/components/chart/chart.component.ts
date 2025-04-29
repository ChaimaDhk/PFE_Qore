import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Chart } from 'chart.js';
import { EventsService } from 'src/app/services/events.service';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';
import { EventsComponent } from '../events/events.component';
import { productSales, productSalesMulti } from '../data'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
users:any;
messages:any;
message:any;
events:any;
event:any;
chaima:any;
myChart:any;
user=0;
//chart

productSales: any[] | undefined;
productSalesMulti: any[] | undefined;

view: any[] = [700, 370];

// options
legendTitle: string = 'Events';
legendTitleMulti: string = 'Quantity Reservation';
legendPosition: string = 'below'; // ['right', 'below']
legend: boolean = true;

xAxis: boolean = true;
yAxis: boolean = true;

yAxisLabel: string = 'Events';
xAxisLabel: string = 'Quantity Reservation';
showXAxisLabel: boolean = true;
showYAxisLabel: boolean = true;

maxXAxisTickLength: number = 30;
maxYAxisTickLength: number = 30;
trimXAxisTicks: boolean = false;
trimYAxisTicks: boolean = false;
rotateXAxisTicks: boolean = false;

xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
yAxisTicks: any[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

animations: boolean = true; // animations on load

showGridLines: boolean = true; // grid lines

showDataLabel: boolean = true; // numbers on bars

gradient: boolean = false;
colorScheme = {
  domain: ['#a1002b', '#ad001f', '#b80014', '#c70005']
};
schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

activeEntries: any[] = ['book']
barPadding: number = 5
tooltipDisabled: boolean = false;

yScaleMax: number = 9000;

roundEdges: boolean = false;
  constructor(private userService:UsersService,private MessegesService:MessagesService,private eventService:EventsService)
  { Object.assign(this, { productSales, productSalesMulti }); }

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
    return this.event;
  })
  console.log(this.event);
  }
 //chart
 
 onSelect(event: any) {
  console.log(event);
}

onActivate(data: any): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data: any): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}

formatString(input: string): string {
  return input.toUpperCase()
}

formatNumber(input: number): number {
  return input
}
}
