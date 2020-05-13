import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardBlockComponent } from './movie-card-block.component';

describe('MovieCardBlockComponent', () => {
  let component: MovieCardBlockComponent;
  let fixture: ComponentFixture<MovieCardBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
