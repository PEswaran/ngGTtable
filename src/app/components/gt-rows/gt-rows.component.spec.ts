import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtRowsComponent } from './gt-rows.component';

describe('GtRowsComponent', () => {
  let component: GtRowsComponent;
  let fixture: ComponentFixture<GtRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
