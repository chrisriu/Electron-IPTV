import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTVSeriesComponent } from './favorite-tvseries.component';

describe('FavoriteTVSeriesComponent', () => {
  let component: FavoriteTVSeriesComponent;
  let fixture: ComponentFixture<FavoriteTVSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTVSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTVSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
