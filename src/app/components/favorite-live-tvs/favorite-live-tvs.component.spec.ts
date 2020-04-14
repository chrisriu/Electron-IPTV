import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLiveTVsComponent } from './favorite-live-tvs.component';

describe('FavoriteLiveTVsComponent', () => {
  let component: FavoriteLiveTVsComponent;
  let fixture: ComponentFixture<FavoriteLiveTVsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteLiveTVsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteLiveTVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
