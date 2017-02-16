import { Component, OnInit } from '@angular/core';
import {FirebaseAppConfig, FirebaseObjectObservable, AngularFire} from "angularfire2";
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
  user;
  constructor(private route: ActivatedRoute,
              private listingService: ListingService,
              private router: Router,
              private af : AngularFire) {

    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = urlParameters['id'];
    });
    this.currentListing = this.listingService.getListingByID(this.listingId);
  }
}
