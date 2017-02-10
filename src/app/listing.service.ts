import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ListingService {

  selectedListing;
  allListings: FirebaseListObservable<any[]>;
  books : FirebaseListObservable<any[]>;
  coins : FirebaseListObservable<any[]>;
  art: FirebaseListObservable<any[]>;
  collectibles : FirebaseListObservable<any[]>;
  gems: FirebaseListObservable<any[]>;

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

    this.collectibles = angularFire.database.list('listings', {
      query: {
        orderByChild: 'productType',
        equalTo: "Diverse Collectibles"
      }
    });

    this.gems = angularFire.database.list('listings', {
      query: {
        orderByChild: 'productType',
        equalTo: "Gems & Minerals"
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

  getAllCoins(){
    return this.coins;
  }

  getAllCollectibles(){
    return this.collectibles;
  }

  getAllGems(){
    return this.gems;
  }

  updateListing(firebaseKey : string, newListing : Listing){
    var currentListing = this.getListingByID(firebaseKey);
    currentListing.update(newListing);
  }

}
