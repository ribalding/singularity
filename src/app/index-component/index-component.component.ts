import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Listing} from "../listing.model";
declare var $: any;

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponent implements OnInit {
  newListings : Listing[];
  listings : FirebaseListObservable<any[]>;

  constructor(angularFire : AngularFire) {
    this.listings = angularFire.database.list('listings', {});
    this.listings.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        var newListing = new Listing();
        newListing.setImage1Path(snapshot);
        console.log(newListing);
      });
    });
  }

  ngOnInit() {
    $(window).load(function() {
      $('#slider').nivoSlider({
        effect:'fold',
        animSpeed:900,
        pauseTime:4500,
        directionNav:false,
        captionOpacity:0.70, //Universal caption opacity
        controlNav:false,
        keyboardNav:false,
        pauseOnHover:false
      });
    });
  }



}