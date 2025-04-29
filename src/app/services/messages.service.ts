import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
//   USER_URL: string = "http://localhost:8080/api/";
MESSAGES_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient) { }
  public contact(messages: any){
    console.log("message from service");
    return this.httpClient.post<{message:string}>(`${this.  MESSAGES_URL + '/api/contacts'}`, messages)
 }
 public response(response: any){
  console.log("message from service");
  return this.httpClient.post<{message:any}>(`${this.  MESSAGES_URL + '/api/send'}`, response)
}
   
 public getMessages(){ 
  return this.httpClient.get<{messages:any}>(this.MESSAGES_URL + '/api/allMessages');
}

public reply(id:any ){
 
   return this.httpClient.get<{message:any}>(`${this.MESSAGES_URL + '/api/allMessages'}/${id}`); 
}

}