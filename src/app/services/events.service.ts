import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
//   EVENT_URL: string = "http://localhost:8080/api/";
EVENT_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient){}
      
  
  
  public getEvents(){ 
   return this.httpClient.get<{events:any}>(this.EVENT_URL + '/api/allEvents');
}
public getEventsById(id:any){ 
   let ID = {};  
  ID= new Object({
    id:id,
   
  });
   console.log(ID);
   return this.httpClient.post<{events:any}>(this.EVENT_URL + '/api/getEventsById', ID);
}
public getEventsByCategorie(category:any){ 
   return this.httpClient.post<{events:any}>(this.EVENT_URL + '/api/getEventsByCategorie', category);
}

public getEvent(id:any ){
 
   return this.httpClient.get<{event:any}>(`${this.EVENT_URL + '/api/allEvents'}/${id}`); 
}

public addEvent(event: any, img:File){
   console.log("event from service");
   let formData =new FormData();
   formData.append('name',event.name);
   formData.append('date',event.date);
   formData.append('place',event.place);
   formData.append('category',event.category);
   formData.append('description',event.description);
   formData.append('price',event.price);
   formData.append('Qte',event.Qte);
   formData.append('img',img);
   console.log(formData)
   return this.httpClient.post<{message:string}>(`${this.EVENT_URL + '/api/addEvent'}`, formData)
}


public deleteEvent(id:any){
   return this.httpClient.delete<{message:string}>(`${this.EVENT_URL + '/api/deleteEvent'}/${id}`)
}
public updateEvent(event:any, img:File){
   let formData =new FormData();
   formData.append('_id',event._id);
   formData.append('name',event.name);
   formData.append('date',event.date);
   formData.append('place',event.place);
   formData.append('category',event.category);
   formData.append('description',event.description);
   formData.append('price',event.price);
   formData.append('Qte',event.Qte);
   formData.append('img',img);
   console.log(formData)
   
  
   return this.httpClient.put<{message:string}>(`${this.EVENT_URL + '/api/editEvent'}/${event._id}`,formData)
}
public newsletter(users: any){
   console.log("message from service");
   return this.httpClient.post<{message:any}>(`${this.  EVENT_URL + '/api/news'}`, users)
 }

}
