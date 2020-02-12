import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMovieSliderComponent } from './multi-movie-slider.component';

describe('MultiMovieSliderComponent', () => {
  let component: MultiMovieSliderComponent;
  let fixture: ComponentFixture<MultiMovieSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiMovieSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiMovieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
