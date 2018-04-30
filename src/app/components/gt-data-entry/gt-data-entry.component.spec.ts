import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtDataEntryComponent } from './gt-data-entry.component';

describe('GtDataEntryComponent', () => {
  let component: GtDataEntryComponent;
  let fixture: ComponentFixture<GtDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
