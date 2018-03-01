import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CountryCompetitionComponent } from './country-competition/country-competition.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionRankingComponent } from './competition-ranking/competition-ranking.component';
import { CompetitionResultsComponent } from './competition-results/competition-results.component';
import { AllcompetitionsComponent } from './allcompetitions/allcompetitions.component';
import { CountriesComponent } from './countries/countries.component';
import { CompetitionTeamsComponent } from './competition-teams/competition-teams.component';

const appRoutes : Routes = [
    { path: "competitions", component: AllcompetitionsComponent},
    { path: "countries", component: CountriesComponent},
    { path: "competitions/:countryid", component: CountryCompetitionComponent},
    { path : "competition/:competitionid", component: CompetitionInfoComponent},
    { path: "competition/:competitionid/ranking", component: CompetitionRankingComponent},
    { path: "competition/:competitionid/ranking/:matchday", component: CompetitionRankingComponent },
    { path: "competition/:competitionid/results/:matchday", component: CompetitionResultsComponent }
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
    CompetitionTeamsComponent,

  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      NgbModule.forRoot(),
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true}
    ),
      MatProgressSpinnerModule,
      MatSelectModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      FormsModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
