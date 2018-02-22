import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-allcompetitions',
  templateUrl: './allcompetitions.component.html',
  styleUrls: ['./allcompetitions.component.css']
})
export class AllcompetitionsComponent implements OnInit {

  constructor(private http: HttpClient, private titleService : Title) { }
    

    
    competitions: Object
  ngOnInit() {
      this.titleService.setTitle("Toutes les compétitions");
      this.http.get("http://127.0.0.1/back-resultats/competitions/").subscribe((data) => {
         this.competitions = data;
          
      });
  }

}
