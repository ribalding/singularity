/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GemsMineralsComponent } from './gems-minerals.component';

describe('GemsMineralsComponent', () => {
  let component: GemsMineralsComponent;
  let fixture: ComponentFixture<GemsMineralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemsMineralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemsMineralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
