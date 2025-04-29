import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-display-messages',
  templateUrl: './display-messages.component.html',
  styleUrls: ['./display-messages.component.css']
})
export class DisplayMessagesComponent implements OnInit {
messages:any;
  constructor(private router:Router ,private MessegesService:MessagesService ) { }

  ngOnInit(): void {
    // this.messages= JSON.parse(localStorage.getItem("messages") || "[]");
    this.MessegesService.getMessages().subscribe(
      (data)=>{
        console.log(data.messages);
      this.messages = data.messages;
  })
  }
  reply(id:any){
    this.router.navigate([`dashbord/reply/${id}`]);

  }
  }


