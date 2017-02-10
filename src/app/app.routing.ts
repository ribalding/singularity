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
import {FullListingComponent} from "./full-listing/full-listing.component";
import {EditListingComponent} from "./edit-listing/edit-listing.component";
import {IndexComponent} from "./index-component/index-component.component";


const appRoutes: Routes = [
  { path: "", component: IndexComponent},
  { path: 'add-new-listing', component: AddNewListingComponent},
  { path: 'art', component: ArtComponent},
  { path: 'books', component: BooksComponent},
  { path: 'gems-minerals', component: GemsMineralsComponent},
  { path: 'books/:id', component: FullListingComponent},
  { path: 'edit-listing/:id', component: EditListingComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
