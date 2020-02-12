import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTvChannelSliderComponent } from './multi-tv-channel-slider.component';

describe('MultiTvChannelSliderComponent', () => {
  let component: MultiTvChannelSliderComponent;
  let fixture: ComponentFixture<MultiTvChannelSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTvChannelSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTvChannelSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
