import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
 
}



