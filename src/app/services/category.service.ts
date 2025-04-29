import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//   EVENT_URL: string = "http://localhost:8080/api/";
CATEGORY_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient){}
   
  public getCategorys(){ 
    return this.httpClient.get<{categorys:any}>(this.CATEGORY_URL + '/api/allCategorys');
}
public addCategory(category: any){
  console.log("category from service");
  return this.httpClient.post<{message:string}>(`${this.CATEGORY_URL + '/api/addCategory'}`, category)
}
public deleteCategory(id:any){
  return this.httpClient.delete<{message:string}>(`${this.CATEGORY_URL + '/api/deleteCategory'}/${id}`)
}

}
