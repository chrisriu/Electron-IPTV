import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreDetailPageComponent } from './movie-genre-detail-page.component';

describe('MovieGenreDetailPageComponent', () => {
  let component: MovieGenreDetailPageComponent;
  let fixture: ComponentFixture<MovieGenreDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGenreDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
