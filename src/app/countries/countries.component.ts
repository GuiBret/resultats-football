import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})



export class CountriesComponent implements OnInit {
  countries : Object;
    
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get("http://vps496160.ovh.net/back-resultats/countries/").subscribe(data => {
          let country,
              elem;

          this.countries = data;
          
          
      });
  }

}