import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from '../api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AddNewListingComponent } from './add-new-listing/add-new-listing.component';
import {routing} from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { GemsMineralsComponent } from './gems-minerals/gems-minerals.component';
import { BooksComponent } from './books/books.component';
import { ArtComponent } from './art/art.component';
import { FullListingComponent } from './full-listing/full-listing.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AddNewListingComponent,
    NavbarComponent,
    GemsMineralsComponent,
    BooksComponent,
    ArtComponent,
    FullListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
