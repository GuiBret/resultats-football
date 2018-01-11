import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiRequestService {
  
  header : HttpHeaders;
  constructor(private http: HttpClientModule) { 
    this.header = new HttpHeaders();
    this.header.append("X-Auth-Token", "0fbc25a8c9394f62934fd087ddb6b0c2");
    this.http = http;
  
  }
    
    getData(): void {
        console.log(this.header.get("X-Auth-Token"));
    }
    
}
