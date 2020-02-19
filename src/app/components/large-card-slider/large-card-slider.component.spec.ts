import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardSliderComponent } from './large-card-slider.component';

describe('LargeCardSliderComponent', () => {
  let component: LargeCardSliderComponent;
  let fixture: ComponentFixture<LargeCardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
