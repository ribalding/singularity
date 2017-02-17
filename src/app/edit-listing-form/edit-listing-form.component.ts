import {Component, OnInit, Input} from '@angular/core';
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";
import Database = firebase.database.Database;
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";
import DataSnapshot = firebase.database.DataSnapshot;
import {ImageGalleryService} from "../image-gallery.service";
declare var $: any;

@Component({
  selector: 'app-edit-listing-form',
  templateUrl: './edit-listing-form.component.html',
  styleUrls: ['./edit-listing-form.component.css'],
  providers: [ListingService, ImageGalleryService]
})
export class EditListingFormComponent implements OnInit {
  @Input() currentListing;
  listingId : string;
  imageCounter;
  fileNames = [];

  constructor(private listingService: ListingService,
              private imageGalleryService : ImageGalleryService,
              private router: Router,
              private route: ActivatedRoute) {
    this.imageGalleryService.getImageFileNames().subscribe(fileNames => {
      this.fileNames = fileNames;
    });
  }

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
      this.imageCounter = this.getNumberOfImages(snapshot);
      this.createInitialImageFields(this.imageCounter, snapshot);
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

  deleteListing(){
    if(confirm('Are You Sure You Want To Delete This Post?')){
      this.listingService.deleteListing(this.listingId);
    }
  }

  createInitialImageFields(imageCounter : number, snapshot){
    for(var i = 2; i < imageCounter; i++){
      var imageId = "image" + i + "Path";
      $("#imageFieldsWrapper").append(
        "<div class='form-group' id='" + imageId +"Div'>" +
        "<label for='" + imageId +"'>Image " +  i + "</label>" +
        "<select class='form-control' name='" + imageId + "' id='" + imageId + "' size='1'>" +
        this.generateFileNameOptions() +
        "</select>" +
        "</div>");
    }
    this.setImageFields(snapshot);
  }

  addExtraImageFields(){
    var imageId : string = "image" + this.imageCounter + "Path";
    if(this.imageCounter < 7){
      $("#imageFieldsWrapper").append(
        "<div class='form-group' id='" + imageId +"Div'>" +
        "<label for='" + imageId +"'>Image " +  this.imageCounter + "</label>" +
        "<select class='form-control' name='" + imageId + "' id='" + imageId + "' size='1'>" +
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

  getNumberOfImages(snapshot){
    var counter = 2;
    if (snapshot.image2Path !== "") { counter += 1; }
    if (snapshot.image3Path !== "") { counter += 1; }
    if (snapshot.image4Path !== "") { counter += 1; }
    if (snapshot.image5Path !== "") { counter += 1; }
    if (snapshot.image6Path !== "") { counter += 1; }
    return counter;
  }

  setImageFields(snapshot){

    $('#image1Path select').val(snapshot.image1Path);

    if($("#image2PathDiv").length){ $('#image2Path select').val(snapshot.image2Path); }
    if($("#image3PathDiv").length){ $('#image3Path select').val(snapshot.image3Path); }
    if($("#image4PathDiv").length){ $('#image4Path select').val(snapshot.image4Path); }
    if($("#image5PathDiv").length){ $('#image5Path select').val(snapshot.image5Path); }
    if($("#image6PathDiv").length){ $('#image6Path select').val(snapshot.image6Path); }
  }
}
