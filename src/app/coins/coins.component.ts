import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  providers: [ListingService]
})
export class CoinsComponent implements OnInit {
  coinListings: FirebaseListObservable<any[]>;

  constructor(private router: Router, private listingService: ListingService) {
    this.coinListings = this.listingService.getAllCoins();
  }

  ngOnInit() {
  }

  goToFullListing(listing){
    this.router.navigate(['coins', listing.$key]);
  }

}
