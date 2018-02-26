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
  matchdaysArray : Array<Number>;
  cur_matchday: Number;
  ngOnInit() {
      
      this.route.params.subscribe((params: ParamMap) => {

          this.http.get(`http://${window.location.hostname}/back-resultats/competition/${params["competitionid"]}/results/${params["matchday"]}`).subscribe(this.getCompetitionResults.bind(this));  
      });
      
  }
    
  getCompetitionResults(data) : void {
      this.matchdaysArray = Array.from(Array(parseInt(sessionStorage.getItem("totalMatchdays"))).keys()).map((x) => x+1); // We create an array indexing all matchdays from the first to the last one
      this.cur_matchday = parseInt(sessionStorage.getItem("currentMatchday"));
      this.results = data;
  }

}
