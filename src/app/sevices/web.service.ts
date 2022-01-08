import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { } 
  
  
  post() {
    return this.http.get<any>( `https://jsonplaceholder.typicode.com/posts`);
  }

  postDetail(id:any){
    return this.http.get<any>( `https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  photoAlbum() {
    return this.http.get<any>( `https://jsonplaceholder.typicode.com/photos`);
  }


}
