import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-allcompetitions',
  templateUrl: './allcompetitions.component.html',
  styleUrls: ['./allcompetitions.component.css']
})
export class AllcompetitionsComponent implements OnInit {

  constructor(private http: HttpClient) { }

    
    competitions: Object
  ngOnInit() {
      console.log("Coucou");
      this.http.get("http://vps496160.ovh.net/back-resultats/competitions/").subscribe((data) => {
          console.log(data);
         this.competitions = data;
          
      });
  }

}
