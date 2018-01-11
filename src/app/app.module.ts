import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { CountryCompetitionComponent } from './country-competition/country-competition.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionRankingComponent } from './competition-ranking/competition-ranking.component';
import { CompetitionResultsComponent } from './competition-results/competition-results.component';



const appRoutes : Routes = [
    { path: "competitions/:countryid", component: CountryCompetitionComponent},
    { path : "competition/:competitionid", component: CompetitionInfoComponent},
    { path: "competition/:competitionid/ranking", component: CompetitionRankingComponent},
    { path: "competition/:competitionid/results", component: CompetitionResultsComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    CountryCompetitionComponent,
    CompetitionInfoComponent,
    CompetitionRankingComponent,
    CompetitionRankingComponent,
    CompetitionResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes, 
        { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
