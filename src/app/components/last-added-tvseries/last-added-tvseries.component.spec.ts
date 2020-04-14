import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedTVSeriesComponent } from './last-added-tvseries.component';

describe('LastAddedTVSeriesComponent', () => {
  let component: LastAddedTVSeriesComponent;
  let fixture: ComponentFixture<LastAddedTVSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddedTVSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddedTVSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
