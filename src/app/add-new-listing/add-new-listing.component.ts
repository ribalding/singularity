import { Component, OnInit, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var $: any;

@Component({
  selector: 'add-new-listing',
  outputs: ['onSubmit'],
  templateUrl: './add-new-listing.component.html',
  styleUrls: ['./add-new-listing.component.css']
})
export class AddNewListingComponent {
  listingTypes = ['Books & Ephemera', 'Art', 'Coins & Currency', 'Gems & Minerals', 'Diverse Collectibles'];
  newListing = new Listing('Test ID','Test Title', 'Test Subtitle', 'Test Type', 42, 'Test Description', 'Test Condition', 'Test SKU', 'Test Location');
  constructor() { }


  onNewListingSubmit(event){
    console.log(event.target.value);
  }
}
