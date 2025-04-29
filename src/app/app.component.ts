import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userConnect:any;
  isDisplay : any = false;
  title = 'TSA';
 
  display(){
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
    
    if (this.userConnect.role == "user") {
      this.isDisplay = !this.isDisplay;
    }
  
  }
  


}
