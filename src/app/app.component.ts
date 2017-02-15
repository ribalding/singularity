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
              private af: AngularFire){}


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
}
