import { Component, OnInit } from '@angular/core';
import {ListingService} from "../listing.service";
import {Router} from "@angular/router";
import {FirebaseListObservable} from "angularfire2";


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers : [ListingService]
})
export class ListingsComponent implements OnInit {
  listings : FirebaseListObservable<any>;
  title : string;

  constructor(private router : Router, private listingService : ListingService) {
    this.getSelectListings();
  }

  ngOnInit() {
  }

  getSelectListings(){
    if(this.router.url === "/books"){
      this.listings=this.listingService.getAllBooks();
      this.title="Books + Ephemera";
    } else if (this.router.url === "/art"){
      this.listings=this.listingService.getAllArt();
      this.title="Art";
    } else if (this.router.url === "/gems-minerals"){
      this.listings=this.listingService.getAllGems();
      this.title="Gems + Minerals";
    } else if (this.router.url === "/coins"){
      this.listings=this.listingService.getAllCoins();
      this.title="Coins + Currency";
    } else if (this.router.url === "/collectibles"){
      this.listings=this.listingService.getAllCollectibles();
      this.title="Collectibles";
    }
  }

  goToFullListing(listing){
    this.router.navigate([this.router.url, listing.$key]);
  }


}
