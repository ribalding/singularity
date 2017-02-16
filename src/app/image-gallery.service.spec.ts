/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageGalleryService } from './image-gallery.service';

describe('ImageGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageGalleryService]
    });
  });

  it('should ...', inject([ImageGalleryService], (service: ImageGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
