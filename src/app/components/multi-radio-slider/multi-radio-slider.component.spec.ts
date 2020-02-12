import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRadioSliderComponent } from './multi-radio-slider.component';

describe('MultiRadioSliderComponent', () => {
  let component: MultiRadioSliderComponent;
  let fixture: ComponentFixture<MultiRadioSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRadioSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRadioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
