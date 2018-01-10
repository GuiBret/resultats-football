import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryCompetitionComponent } from './country-competition/country-competition.component';


const appRoutes : Routes = [
    { path: "competitions/:countryid", component: CountryCompetitionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CountryCompetitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
        appRoutes, 
        { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
