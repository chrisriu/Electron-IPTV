import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedLiveTVsComponent } from './last-added-live-tvs.component';

describe('LastAddedLiveTVsComponent', () => {
  let component: LastAddedLiveTVsComponent;
  let fixture: ComponentFixture<LastAddedLiveTVsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAddedLiveTVsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAddedLiveTVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
