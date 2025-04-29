import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  id:any;
  replyForm !:FormGroup;
  message:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private MessagesService:MessagesService ) { }

  ngOnInit(): void {
      
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   
    this.MessagesService.reply(this.id).subscribe(
      (data)=>{
        this.message =data.message;
        console.log(this.message);
 
  this.replyForm =this.formBuilder.group({
    email:[this.message.email],
  
    reply:['']
  }) });
}
response(c:any){
 
  this.MessagesService.response(c).subscribe(
    (data)=>{
   console.log(data.message);
    } 
  )};
    
}
