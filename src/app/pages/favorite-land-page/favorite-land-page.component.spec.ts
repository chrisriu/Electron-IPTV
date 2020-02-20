import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLandPageComponent } from './favorite-land-page.component';

describe('FavoriteLandPageComponent', () => {
  let component: FavoriteLandPageComponent;
  let fixture: ComponentFixture<FavoriteLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
