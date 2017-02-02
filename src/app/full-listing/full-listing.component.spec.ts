/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullListingComponent } from './full-listing.component';

describe('FullListingComponent', () => {
  let component: FullListingComponent;
  let fixture: ComponentFixture<FullListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
