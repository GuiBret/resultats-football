import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-country-competition',
  templateUrl: './country-competition.component.html',
  styleUrls: ['./country-competition.component.css']
})


export class CountryCompetitionComponent implements OnInit {
    
    
    results: Object[]
  constructor(private http: HttpClient) { }

  ngOnInit() : void {
      
      this.http.get(`http://${window.location.hostname}/back-resultats/countries/`).subscribe(data => {
        
      });
  }

}
