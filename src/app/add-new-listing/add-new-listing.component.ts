import { Component, OnInit, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ListingService } from '../listing.service';

declare var $: any;

@Component({
  selector: 'add-new-listing',
  outputs: ['onSubmit'],
  templateUrl: './add-new-listing.component.html',
  styleUrls: ['./add-new-listing.component.css'],
  providers: [ListingService]
})
export class AddNewListingComponent {
  constructor(private listingService : ListingService) { }

  listingTypes = ['Books & Ephemera', 'Art', 'Coins & Currency', 'Gems & Minerals', 'Diverse Collectibles'];

  onNewListingSubmit(productTitle,
                     productSubTitle,
                     productType,
                     productPrice,
                     productDescription,
                     productCondition,
                     sku ,
                     location,
                     image_1_path){

    if(this.validatePrice(productPrice.value) ||
        this.validateString(productTitle.value) ||
        this.validateString(productType.value) ||
        this.validateString(productDescription.value) ||
        this.validateString(productCondition.value) ||
        this.validateString(sku.value) ||
        this.validateString(image_1_path.value)){

      var newListing : Listing = new Listing(productTitle.value, productSubTitle.value, productType.value, productPrice.value, productDescription.value, productCondition.value, sku.value, location.value,image_1_path.value);
      this.listingService.addListing(newListing);
    } else {
      alert("Some fields were not entered correctly");
    }

  }

  validatePrice(price){
      return typeof price === "number";
  }

  validateString(string){
    return string !== "";
  }
}
