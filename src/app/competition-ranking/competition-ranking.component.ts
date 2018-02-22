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

  constructor(private http: HttpClient, private route: ActivatedRoute, private titleService: Title) { }
    
    ranking: Object;

  ngOnInit() {
      this.route.params.subscribe((params : ParamMap) => {
          
            //this.competition_id = params["idcompetition"]
          

            this.http.get(`http://${window.location.hostname}/back-resultats/competition/${params["competitionid"]}/rankings`).subscribe((data) => {
                console.log(data);
                //console.log(data.leagueCaption);
                //this.titleService.setTitle(`${data.leagueCaption} : Classement`);
                this.ranking = data;
            });
          
      });
      
  }

}
