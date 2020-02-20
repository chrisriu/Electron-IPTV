import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesLandPageComponent } from './tvseries-land-page.component';

describe('TvseriesLandPageComponent', () => {
  let component: TvseriesLandPageComponent;
  let fixture: ComponentFixture<TvseriesLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvseriesLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
