
import { EventsService } from 'src/app/services/events.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Component,  ElementRef,  OnInit} from '@angular/core';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas'
@Component({
  selector: 'app-client-invoice',
  templateUrl: './client-invoice.component.html',
  styleUrls: ['./client-invoice.component.css']
})
export class ClientInvoiceComponent implements OnInit {

  title = 'pdf-viewer';
  reservations:any=[];
  reserve:any=[];
  userConnect:any;
  events:any =[];
  reserved:any=[];
  totale=0;
  today = new Date();
  price:any={};
  element:any;
  imgData:any;
  data:any;
  constructor(private reservationService:ReservationsService,private eventsService:EventsService) { }

  ngOnInit(): void {
    this.userConnect= JSON.parse(localStorage.getItem("userConnect") || "[]");
    this.reservationService.getReservations().subscribe(
      (data)=>{
        console.log(data.reserved_events);
      this.reservations = data.reserved_events;
      console.log( this.reservations);
      for (let i = 0; i < this.reservations.length; i++) {
        if(this.reservations[i].idUser==this.userConnect._id)
        this.reserve.push(this.reservations[i])
      } console.log(this.reserve);
      for (let i = 0; i< this.reserve.length; i++) {  
       this.eventsService.getEvent(this.reserve[i].idEvent).subscribe(
        (data)=>{
    
        this.events = data.event;
        console.log( this.events);
        this.reserved.push(   { Event:this.events, total:[this.reserve[i].totalePrice] })
 
    this.totale=this.totale+parseInt(this.reserve[i].totalePrice);
   
      })
      } console.log(this.reserved);
     
  })
  } 

  DownloadPDF()  {
    this.data = document.getElementById('invoice');
      html2canvas(this.data).then(canvas => {
        var imgWidth =210;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        const doc = new jsPDF();
        var position = 0;
        doc.addImage(contentDataURL, 'PNG', 0, position,imgWidth, imgHeight)
        doc.save('invoice.pdf');
      });
    }
}
