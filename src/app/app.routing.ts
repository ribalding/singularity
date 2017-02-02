/**
 * Created by Ryan on 1/23/2017.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewListingComponent } from "./add-new-listing/add-new-listing.component";
import {ArtComponent} from "./art/art.component";
import {BooksComponent} from "./books/books.component";
import {GemsMineralsComponent} from "./gems-minerals/gems-minerals.component";


const appRoutes: Routes = [
  { path: 'add-new-listing', component: AddNewListingComponent},
  { path: 'art', component: ArtComponent},
  { path: 'books', component: BooksComponent},
  { path: 'gems-minerals', component: GemsMineralsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
