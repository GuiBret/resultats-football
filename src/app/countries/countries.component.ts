import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})



export class CountriesComponent implements OnInit {
  countries : Object;
    
  constructor(private http: HttpClient, private titleService : Title) { }

    
  ngOnInit() {
      
      this.titleService.setTitle("Compétitions par pays");
      
      this.http.get(`http://${ window.location.hostname}/back-resultats/countries/`).subscribe(data => {
          
          console.log(data);
          let country,
              elem;

          this.countries = data;
          
          
      });
  }

}