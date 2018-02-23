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
    page_title: string;

  ngOnInit() {
      this.route.params.subscribe((params : ParamMap) => {

            this.http.get(`http://${window.location.hostname}/back-resultats/competition/${params["competitionid"]}/rankings`).subscribe((data) => {
                
                this.ranking = data;
                this.page_title = this.ranking["leagueCaption"];
                this.titleService.setTitle(`${this.page_title} : Classement`);
                
            });
          
      });
      
  }

}
