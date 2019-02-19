import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { environment} from "../environments/environment"
import { MaincardComponent } from './maincard/maincard.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';
import { PlayernamesComponent } from './playernames/playernames.component';



const appRoutes: Routes = [
  {path: 'openingPage', component: OpeningpageComponent },
  {path: 'playerName', component: PlayernamesComponent},
  {path: 'mainCard', component: MaincardComponent},
  {path: '', redirectTo: '/openingPage', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    MaincardComponent,
    OpeningpageComponent,
    PlayernamesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
