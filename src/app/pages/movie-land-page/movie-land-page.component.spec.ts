import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLandPageComponent } from './movie-land-page.component';

describe('MovieLandPageComponent', () => {
  let component: MovieLandPageComponent;
  let fixture: ComponentFixture<MovieLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
