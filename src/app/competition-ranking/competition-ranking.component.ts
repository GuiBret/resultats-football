import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-competition-ranking',
  templateUrl: './competition-ranking.component.html',
  styleUrls: ['./competition-ranking.component.css']
})
export class CompetitionRankingComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
    
    ranking: Object;

  ngOnInit() {
      this.route.params.subscribe((params : ParamMap) => {
          
            //this.competition_id = params["idcompetition"]

            this.http.get(`http://localhost/back-resultats/competition/${params["competitionid"]}/rankings`).subscribe((data) => {
          
                this.ranking = data;
            });
          
      });
      
  }

}
