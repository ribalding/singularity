import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from  './most-listings';

@Injectable()
export class ListingService {

  constructor() { }

  getListings(){
    return LISTINGS;
  }

}
