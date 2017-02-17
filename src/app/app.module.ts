import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { masterFirebaseConfig } from '../api-keys';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import { AppComponent } from './app.component';
import { AddNewListingComponent } from './add-new-listing/add-new-listing.component';
import {routing} from "./app.routing";
import { FullListingComponent } from './full-listing/full-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { EditListingFormComponent } from './edit-listing-form/edit-listing-form.component';
import { IndexComponent } from './index-component/index-component.component';
import { ListingsComponent } from './listings/listings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AboutComponent } from './about/about.component';


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
    FullListingComponent,
    EditListingComponent,
    EditListingFormComponent,
    IndexComponent,
    ListingsComponent,
    AdminLoginComponent,
    ImageGalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
