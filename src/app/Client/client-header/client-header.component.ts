import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  userConnect:any;
  isDisplay:any;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
    
    if (this.userConnect.role == "user") {
      this.isDisplay = !this.isDisplay;
    }
   
  
    
  }
  goto(){
    this.router.navigate([`contact`]);
  }
  out(){
    localStorage.removeItem("userConnect");
  }
  updateUser(id:any){
    this.router.navigate([`client/updateInfo/${id}`]);

  }
}
