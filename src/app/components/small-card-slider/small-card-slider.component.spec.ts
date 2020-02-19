import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardSliderComponent } from './small-card-slider.component';

describe('SmallCardSliderComponent', () => {
  let component: SmallCardSliderComponent;
  let fixture: ComponentFixture<SmallCardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
