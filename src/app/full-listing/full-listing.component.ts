import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-full-listing',
  templateUrl: './full-listing.component.html',
  styleUrls: ['./full-listing.component.css'],
  providers: [ListingService]
})
export class FullListingComponent implements OnInit {

  listingId : string;
  listingToDisplay : Listing;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private listingService: ListingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = urlParameters['id'];
    });
    this.listingToDisplay = this.listingService.getListingByID(this.listingId);
  }

}
