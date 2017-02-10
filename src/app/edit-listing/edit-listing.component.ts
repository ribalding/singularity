import { Component, OnInit } from '@angular/core';
import {FirebaseAppConfig, FirebaseObjectObservable} from "angularfire2";
import {Router, ActivatedRoute} from "@angular/router";
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
  providers: [ListingService]
})
export class EditListingComponent implements OnInit {
  listingId : string;
  currentListing : FirebaseObjectObservable<any>;
  constructor(private route: ActivatedRoute,
              private listingService: ListingService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = urlParameters['id'];
    });
    this.currentListing = this.listingService.getListingByID(this.listingId);
  }
}
