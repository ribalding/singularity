import {Component, OnInit, Input} from '@angular/core';
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";
import Database = firebase.database.Database;
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
declare var $: any;

@Component({
  selector: 'app-edit-listing-form',
  templateUrl: './edit-listing-form.component.html',
  styleUrls: ['./edit-listing-form.component.css'],
  providers: [ListingService]
})
export class EditListingFormComponent implements OnInit {
  updatedListing : Listing = new Listing();
  @Input() currentListing;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    $("#productDescription").val(this.currentListing.productDescription);

  }

  onEditListingSubmit(){
  }


  createListingObject(listing){
    var newListing : Listing = new Listing();
  }
}
