import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
//   USER_URL: string = "http://localhost:8080/api/";
RESERVATIONS_URL: string = "http://localhost:3000";

  constructor(private httpClient :HttpClient) { }
  public addReservation(res: any ,reservation:any,totalePrice:any){
    console.log("reservation from service");
    
    let reservations = {};  
    reservations = new Object({
      idEvent:reservation.idEvent,
      idUser:reservation.idUser,
      qteRes:res.qteRes,
      totalePrice:totalePrice
    });
  console.log(reservations);
  
  

    return this.httpClient.post<{message:string}>(`${this.RESERVATIONS_URL + '/api/reservation'}`, reservations)
    
 }
 public getReservation(id:any){
  return this.httpClient.get<{reserved_events:any}>(`${this.RESERVATIONS_URL + '/api/allReservation'}/${id}`); 
} 
public getReservations(){ 
  return this.httpClient.get<{reserved_events:any}>(this.RESERVATIONS_URL + '/api/allReservations');
}
 public deleteReservation(id:any,qte:any){
  console.log("id",id);
  console.log("qte",qte);
  
  
  return this.httpClient.delete<{message:string}>(`${this.RESERVATIONS_URL + '/api/deleteReservation'}/${id}`)
}
public updateQte(id:any, qte:any){
  let edit = {};  
    edit = new Object({
      id:id,
      qte:qte
    });
  return this.httpClient.put<{message:string}>(`${this.RESERVATIONS_URL + '/api/editQte'}/${id}`,edit)
}
}
