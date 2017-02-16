import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from "../image-gallery.service";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  providers: [ImageGalleryService]
})
export class ImageGalleryComponent implements OnInit {

  constructor(private imageGalleryService : ImageGalleryService,
              private af : AngularFire,
              private router : Router) {
    this.imageGalleryService.getImageFileNames().subscribe(files => {
      this.imageList = files;
      this.generateImageGallery();
      $('.lightbox').nivoLightbox();
    });

    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      } else {
        this.router.navigate([""]);
      }
    });
  }

  user;
  imageList = [];

  ngOnInit() {
  }

  generateImageGallery() {
    var imageRowCounter = 1;
    $("#imageGalleryDiv").append(
      "<div class='row image-row' id='imageRow" + imageRowCounter +"'></div>"
    );

    for (var i = 0; i < this.imageList.length; i++) {
      if(i % 6 !== 0 || i === 0){
        $("#imageRow" + imageRowCounter).prepend(
          "<div class='col-sm-2'>" +
            "<a class='lightbox' href='../../assets/images/" + this.imageList[i] + "'><img class='image-thumbnail' src='../../assets/images/" + this.imageList[i] + "'></a>" +
            "<label class='thumbnail-label'>" + this.imageList[i] + "</label>" +
            "</div>"
        )
      } else {
        imageRowCounter++;
        $("#imageGalleryDiv").append(
          "<div class='row image-row' id='imageRow" + imageRowCounter +"'>" +
          "<div class='col-sm-2'>" +
          "<a class='lightbox' href='../../assets/images/" + this.imageList[i] + "'><img class='image-thumbnail' src='../../assets/images/" + this.imageList[i] + "'></a>" +
          "<label class='thumbnail-label'>" + this.imageList[i] + "</label>" +
          "</div>" +
          "</div>"
        )

      }
    }
  }

}
