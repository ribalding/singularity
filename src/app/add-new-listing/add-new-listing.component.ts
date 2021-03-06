import { Component, OnInit, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ListingService } from '../listing.service';
import {Router} from "@angular/router";
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ImageGalleryService} from "../image-gallery.service";

declare var $: any;

@Component({
  selector: 'add-new-listing',
  outputs: ['onSubmit'],
  templateUrl: './add-new-listing.component.html',
  styleUrls: ['./add-new-listing.component.css'],
  providers: [ListingService, ImageGalleryService]
})

export class AddNewListingComponent {
  user;
  fileNames = [];
  listingTypes = ['Books & Ephemera', 'Art', 'Coins & Currency', 'Gems & Minerals', 'Sports' ,'Diverse Collectibles'];
  imageCounter : number = 2;

  constructor(private listingService : ListingService,
              private imageGalleryService : ImageGalleryService,
              private router : Router,
              private http: Http,
              private af : AngularFire) {

      this.af.auth.subscribe(user => {
        if(user) {
          this.user = user;
        } else {
          this.router.navigate(['']);
        }
      });
      this.imageGalleryService.getImageFileNames().subscribe(fileNames => {
        this.fileNames=fileNames;
      });
  }

  onNewListingSubmit(productTitle,
                     productSubTitle,
                     productType,
                     productPrice,
                     productDescription,
                     productCondition,
                     sku ,
                     location,
                     image_1_path){

    if(this.validatePrice(productPrice.value) || this.validateString(productTitle.value) || this.validateString(productType.value) ||
        this.validateString(productDescription.value) || this.validateString(productCondition.value) || this.validateString(sku.value) ||
        this.validateString(image_1_path.value)){

      var newListing : Listing = new Listing(productTitle.value,
                                              productSubTitle.value,
                                              productType.value,
                                              productPrice.value,
                                              productDescription.value,
                                              productCondition.value,
                                              sku.value,
                                              location.value,
                                              image_1_path.value);


      if ($("#image2PathDiv").length){
        newListing.setImage2Path($("#image2Path").val());
      } else {
        newListing.setImage4Path("");
      }

      if ($("#image3PathDiv").length){
        newListing.setImage3Path($("#image3Path").val());
      } else {
        newListing.setImage3Path("");
      }

      if ($("#image4PathDiv").length){
        newListing.setImage4Path($("#image4Path").val());
      } else {
        newListing.setImage4Path("");
      }

      if ($("#image5PathDiv").length){
        newListing.setImage5Path($("#image5Path").val());
      } else {
        newListing.setImage5Path("");
      }

      if ($("#image6PathDiv").length){
        newListing.setImage6Path($("#image6Path").val());
      } else {
        newListing.setImage6Path("");
      }

        newListing.setShippingPrice($("#shippingPrice").val());
        newListing.setNotes($("#notes").val());

      this.listingService.addListing(newListing);
      alert("Listing Saved Successfully");
      this.router.navigate([""]);

    } else {
      alert("Please Fill Out All Required Fields");
    }

  }

  validatePrice(price){
      return typeof price === "number";
  }

  validateString(string){
    return string !== "";
  }

  getImageFileNames() : Observable<any> {
    return this.http.get("assets/images")
      .map(this.parseFileNames);
  }

  parseFileNames(res: Response){
   return res.json();
  }

  addExtraImageFields(){
    var imageId : string = "image" + this.imageCounter + "Path";
    if(this.imageCounter < 7){
      $("#imageFieldsWrapper").append(
        "<div class='form-group' id='" + imageId +"Div'>" +
        "<label for='" + imageId +"'>Image " +  this.imageCounter + "</label>" +
        "<select class='form-control' name='" + imageId + "' id='" + imageId + "' size='1' #" + imageId +">" +
        this.generateFileNameOptions() +
      "</select>" +
      "</div>");

      this.imageCounter ++;
    }

    if(this.imageCounter === 3){
      $("#removeNewImageField").show();
    }
  }

  removeExtraImageField(){
    if(this.imageCounter > 2){
      $("#image" + (this.imageCounter - 1) + "PathDiv").remove();
      this.imageCounter --;
    }
  }

  generateFileNameOptions(){
    var html : string;
    this.fileNames.forEach(function(fileName){
      html += "<option value='" + fileName +"'>" + fileName + "</option>";
    });
    return html;
  }

  userIsLoggedIn(){
    return this.user != null;
  }

}
