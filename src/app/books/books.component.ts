import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ListingService]
})
export class BooksComponent implements OnInit {

  listings : Listing[];
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

}
