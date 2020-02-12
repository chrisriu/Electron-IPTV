import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeriesSliderComponent } from './multi-series-slider.component';

describe('MultiSeriesSliderComponent', () => {
  let component: MultiSeriesSliderComponent;
  let fixture: ComponentFixture<MultiSeriesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSeriesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSeriesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
