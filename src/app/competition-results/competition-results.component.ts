import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-competition-results',
  templateUrl: './competition-results.component.html',
  styleUrls: ['./competition-results.component.css']
})
export class CompetitionResultsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private title: Title) { }

  
  results: Object;
  ngOnInit() {
      
      this.route.params.subscribe((params: ParamMap) => {

          this.http.get(`http://${window.location.hostname}/back-resultats/competition/${params["competitionid"]}/results/${params["matchday"]}`).subscribe((data) => {
              this.results = data;
          });  
      });
      
      
      
  }

}
