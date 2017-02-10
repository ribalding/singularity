import {Component, OnInit, Input} from '@angular/core';
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";
import Database = firebase.database.Database;
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Router, ActivatedRoute} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-edit-listing-form',
  templateUrl: './edit-listing-form.component.html',
  styleUrls: ['./edit-listing-form.component.css'],
  providers: [ListingService]
})
export class EditListingFormComponent implements OnInit {
  @Input() currentListing;
  listingId : string;

  constructor(private listingService: ListingService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = urlParameters['id'];
    });

    this.currentListing.subscribe(snapshot => {
      $('#productSKU').val(snapshot.sku);
      $('#productTitle').val(snapshot.productTitle);
      $('#productSubtitle').val(snapshot.productSubTitle);
      $('#productPrice').val(snapshot.productPrice);
      $('#productDescription').val(snapshot.productDescription);
      $('#storageLocation').val(snapshot.location);
      $('#productCondition').val(snapshot.productCondition);
      $('#image1Path').val(snapshot.image1Path);
      $('#typeSelect select').val(snapshot.productType);
    });
  }

  onEditListingSubmit(){
    var updatedListing : Listing = new Listing(   $('#productTitle').val(),
                                                  $('#productSubtitle').val(),
                                                  $('#productType').val(),
                                                  $('#productPrice').val(),
                                                  $('#productDescription').val(),
                                                  $('#productCondition').val(),
                                                  $('#productSKU').val(),
                                                  $('#storageLocation').val(),
                                                  $('#image1Path').val());

    this.listingService.updateListing(this.listingId, updatedListing);
  }


  createListingObject(listing){
  }
}
