import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  events:any;
  searchForm!: FormGroup;
  isDisplay:any;
 
  constructor(private eventService:EventsService,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.isDisplay=false;
  
  this.searchForm =this.formBuilder.group({
    search: ['']
 
});

} 


search(s:any){
  this.eventService.getEventsByCategorie(s).subscribe(
    (data)=>{
      this.events=data.events;
      console.log(this.events);
      
      this.isDisplay=!this.isDisplay;

      
   })
}
}
