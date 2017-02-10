import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import {Listing} from "../listing.model";
import {Router} from "@angular/router";
import {FirebaseListObservable, FirebaseObjectObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  providers : [ListingService]

})
export class ArtComponent implements OnInit {
  artListings: FirebaseListObservable<any[]>;

  constructor(private router: Router, private listingService: ListingService) {
    this.artListings = this.listingService.getAllArt();
  }

  ngOnInit() {
  }

}
