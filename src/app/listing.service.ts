import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from  './most-listings';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ListingService {

  selectedListing;
  allListings: FirebaseListObservable<any[]>;
  books : FirebaseListObservable<any[]>;
  coins : FirebaseListObservable<any[]>;
  art: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.allListings = angularFire.database.list('listings');
    this.books = angularFire.database.list('listings', {
      query: {
        orderByChild: 'productType',
        equalTo: "Books & Ephemera"
      }
    });

    this.coins = angularFire.database.list('listings', {
      query: {
        orderByChild: 'productType',
        equalTo: "Coins & Currency"
      }
    });

    this.art = angularFire.database.list('listings', {
        query: {
          orderByChild: 'productType',
          equalTo: "Art"
        }
    });
  }

  getFirebaseListings(){
    return this.allListings;
  }

  addListing(newListing: Listing) {
    this.allListings.push(newListing);
  }


  getListingByID(listingId : string){
    return this.angularFire.database.object('listings/' + listingId);
  }

  getAllBooks(){
    return this.books;
  }

  getAllArt(){
    return this.art;
  }

}
