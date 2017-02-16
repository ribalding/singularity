import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class ImageGalleryService {

  constructor(private angularFire: AngularFire,
              private http: Http) {

    this.imageFileNames = this.getImageFileNames();
  }

  imageFileNames;

  getImageFileNames() : Observable<any> {
    return this.http.get("assets/images")
      .map(this.parseFileNames);
  }

  parseFileNames(res: Response){
    return res.json();
  }


}
