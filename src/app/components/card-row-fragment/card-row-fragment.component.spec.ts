import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRowFragmentComponent } from './card-row-fragment.component';

describe('CardRowFragmentComponent', () => {
  let component: CardRowFragmentComponent;
  let fixture: ComponentFixture<CardRowFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRowFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRowFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
