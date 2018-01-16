import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CountryCompetitionComponent } from './country-competition/country-competition.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionRankingComponent } from './competition-ranking/competition-ranking.component';
import { CompetitionResultsComponent } from './competition-results/competition-results.component';
import { AllcompetitionsComponent } from './allcompetitions/allcompetitions.component';
import { CountriesComponent } from './countries/countries.component';



const appRoutes : Routes = [
    { path: "competitions", component: AllcompetitionsComponent},
    { path: "countries", component: CountriesComponent},
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
    AllcompetitionsComponent,
    CountriesComponent,
    
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(
        appRoutes, 
        { enableTracing: true}
    ),
      MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
