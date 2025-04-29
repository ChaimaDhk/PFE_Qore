import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import sweetalert2 from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-admin-reply',
  templateUrl: './admin-reply.component.html',
  styleUrls: ['./admin-reply.component.css']
})
export class AdminReplyComponent implements OnInit {

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
  )
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'sended',
    showConfirmButton: false,
    timer: 1500
  })
};

}
