import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-country-competition',
  templateUrl: './country-competition.component.html',
  styleUrls: ['./country-competition.component.css']
})


export class CountryCompetitionComponent implements OnInit {
    
    
    
  constructor(private http: HttpClient, private route : ActivatedRoute) { }

    results: Object;
    
  ngOnInit() {
      
      this.route.params.subscribe((params : ParamMap) => { 
          
          this.http.get(`http://${ window.location.hostname }/back-resultats/country-competitions/${params["countryid"]}`).subscribe((data) => {
              console.log(data);
             this.results = data;
          });
    });
  }

}
