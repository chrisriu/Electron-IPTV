import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvchannelLandPageComponent } from './tvchannel-land-page.component';

describe('TvchannelLandPageComponent', () => {
  let component: TvchannelLandPageComponent;
  let fixture: ComponentFixture<TvchannelLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvchannelLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvchannelLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
