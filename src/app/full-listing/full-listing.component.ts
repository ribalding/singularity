import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import {FirebaseObjectObservable, AngularFire} from 'angularfire2';

@Component({
  selector: 'app-full-listing',
  templateUrl: './full-listing.component.html',
  styleUrls: ['./full-listing.component.css'],
  providers: [ListingService]
})
export class FullListingComponent implements OnInit {

  listingId : string;
  listingToDisplay : FirebaseObjectObservable<any>;
  user;
  image2Exists;
  image3Exists;
  image4Exists;
  image5Exists;
  image6Exists;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private listingService: ListingService,
              private router: Router,
              private af: AngularFire) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = urlParameters['id'];
    });
    this.listingToDisplay = this.listingService.getListingByID(this.listingId);
    this.listingToDisplay.subscribe(listing => {
      this.image2Exists = this.imageExists(listing.image2Path);
      this.image3Exists = this.imageExists(listing.image3Path);
      this.image4Exists = this.imageExists(listing.image4Path);
      this.image5Exists = this.imageExists(listing.image5Path);
      this.image6Exists = this.imageExists(listing.image6Path);
    });

  }

  goToEditListing(){
    this.router.navigate(['edit-listing', this.listingId]);
  }

  userIsLoggedIn(){
    return this.user != null;
  }

  imageExists(image : string){
    return image !== "";
  }

}
