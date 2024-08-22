import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class ConnService {
  readonly uri = 'http://localhost:5000/posts';
  infor: any;
  private options = {
    headers: new HttpHeaders({'Content-Type': 'application/text'})
  }

  constructor(public httpClient: HttpClient) { }
  
  getPost(){
    return this.httpClient.get(this.uri);
  }
  postData(postContent: any){
    return this.httpClient.post(this.uri, JSON.parse(JSON.stringify(postContent)))
  }
}
