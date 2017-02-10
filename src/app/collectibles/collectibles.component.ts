import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-collectibles',
  templateUrl: './collectibles.component.html',
  styleUrls: ['./collectibles.component.css'],
  providers : [ListingService]
})
export class CollectiblesComponent implements OnInit {

  collectibleListings : FirebaseListObservable<any[]>;

  constructor(private router: Router, private listingService: ListingService) {
    this.collectibleListings = this.listingService.getAllCollectibles();
  }

  ngOnInit() {
  }

  goToFullListing(listing){
    this.router.navigate(['collectibles', listing.$key]);
  }

}
