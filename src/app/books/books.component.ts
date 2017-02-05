import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ListingService]
})
export class BooksComponent implements OnInit {

  listings : FirebaseListObservable<any[]>;
  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getFirebaseListings();
  }

  goToFullListing(listing){
    this.router.navigate(['books', listing.$key]);
  }

}
