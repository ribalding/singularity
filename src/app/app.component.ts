import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private af: AngularFire){
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = null;
      }
    });
  }

  user;

  ngOnInit(){
    $("body").fadeIn(1000);
  }

  goToBooks(){
    this.router.navigate(['books']);
  }

  goToGems(){
    this.router.navigate(['gems-minerals']);
  }

  goToArt(){
    this.router.navigate(['art']);
  }

  goToCoins(){
    this.router.navigate(['coins']);
  }

  goToCollectibles(){
    this.router.navigate(['collectibles']);
  }

  adminLogout() {
    this.af.auth.logout();
  }

  userIsLoggedIn(){
    return this.user != null;
  }

  goToAddNewListing(){
    this.router.navigate(['add-new-listing']);
  }

  goToImageGallery(){
    this.router.navigate(['image-gallery']);
  }

  goToSports(){
    this.router.navigate(['sports']);
  }
}
