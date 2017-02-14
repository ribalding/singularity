import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Listing} from "../listing.model";
declare var $: any;
declare var m : any;

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponent implements OnInit {
  newListings : Listing[] = [];
  listings : FirebaseListObservable<any[]>;


  constructor(angularFire : AngularFire) {
    this.listings = angularFire.database.list('listings', {});
    this.listings.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        var newListing : Listing = new Listing(snapshot.productTitle,
                                                snapshot.productSubTitle,
                                                snapshot.productType,
                                                snapshot.productPrice,
                                                snapshot.productDescription,
                                                snapshot.productCondition,
                                                snapshot.sku,
                                                snapshot.location,
                                                snapshot.image1Path);

        this.newListings.push(newListing);
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

    m.attach({
      thumb: '#thumb',
      large: '../../assets/images/sampleArt1.jpg',
      largeWrapper: 'preview',
      zoom: 3
    });
  }



}
