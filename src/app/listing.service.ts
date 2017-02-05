import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from  './most-listings';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ListingService {
listings: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.listings = angularFire.database.list('listings');
  }

  getFirebaseListings(){
    return this.listings;
  }

  addListing(newListing: Listing) {
    alert(newListing.getProductTitle());
    this.listings.push(newListing);
  }


  getListingByID(listingId : string){
    return this.angularFire.database.object('listings/' + listingId);
  }

}
