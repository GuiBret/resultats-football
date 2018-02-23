import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.css']
})
export class CompetitionInfoComponent implements OnInit {

  constructor(private http : HttpClient, private route : ActivatedRoute) { }

    competition: Object
  ngOnInit() {
      
      this.route.params.subscribe((params : ParamMap) => {

            this.http.get(`http://${window.location.hostname}/back-resultats/competition/${params["competitionid"]}`).subscribe((data) => {
                
                this.competition = data;
            });
          
      });
      
      
      
      
  }

}
