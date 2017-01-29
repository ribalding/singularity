/**
 * Created by Ryan on 1/23/2017.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewListingComponent } from "./add-new-listing/add-new-listing.component";


const appRoutes: Routes = [
  { path: 'add-new-listing', component: AddNewListingComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
