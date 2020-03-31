import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedMoviesComponent } from './last-added-movies.component';

describe('LastAddedMoviesComponent', () => {
  let component: LastAddedMoviesComponent;
  let fixture: ComponentFixture<LastAddedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
