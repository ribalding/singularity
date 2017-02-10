/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditListingFormComponent } from './edit-listing-form.component';

describe('EditListingFormComponent', () => {
  let component: EditListingFormComponent;
  let fixture: ComponentFixture<EditListingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
