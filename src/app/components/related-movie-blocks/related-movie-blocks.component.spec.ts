import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedMovieBlocksComponent } from './related-movie-blocks.component';

describe('RelatedMovieBlocksComponent', () => {
  let component: RelatedMovieBlocksComponent;
  let fixture: ComponentFixture<RelatedMovieBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedMovieBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedMovieBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
