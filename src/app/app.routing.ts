/**
 * Created by Ryan on 1/23/2017.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewListingComponent } from "./add-new-listing/add-new-listing.component";
import {FullListingComponent} from "./full-listing/full-listing.component";
import {EditListingComponent} from "./edit-listing/edit-listing.component";
import {IndexComponent} from "./index-component/index-component.component";
import {ListingsComponent} from "./listings/listings.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {AboutComponent} from "./about/about.component";


const appRoutes: Routes = [
  { path: "", component: IndexComponent},
  { path: 'add-new-listing', component: AddNewListingComponent},
  { path: 'art', component: ListingsComponent},
  { path: 'books', component: ListingsComponent},
  { path: 'coins', component: ListingsComponent},
  { path: 'collectibles', component: ListingsComponent},
  { path: 'gems-minerals', component: ListingsComponent},
  { path: 'sports', component: ListingsComponent},
  { path: 'books/:id', component: FullListingComponent},
  { path: 'art/:id', component: FullListingComponent},
  { path: 'coins/:id', component: FullListingComponent},
  { path: 'collectibles/:id', component: FullListingComponent},
  { path: 'gems-minerals/:id', component: FullListingComponent},
  { path: 'sports/:id', component: FullListingComponent},
  { path: 'edit-listing/:id', component: EditListingComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'image-gallery', component: ImageGalleryComponent},
  { path: "about", component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
