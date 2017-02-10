import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-gems-minerals',
  templateUrl: './gems-minerals.component.html',
  styleUrls: ['./gems-minerals.component.css'],
  providers : [ListingService]
})
export class GemsMineralsComponent implements OnInit {
  gemListings: FirebaseListObservable<any[]>;

  constructor(private router: Router, private listingService: ListingService) {
    this.gemListings = this.listingService.getAllGems();
  }

  ngOnInit() {
  }

  goToFullListing(listing){
    this.router.navigate(['gems-minerals', listing.$key]);
  }

}
