import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}

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

}
