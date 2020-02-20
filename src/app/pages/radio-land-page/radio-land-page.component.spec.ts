import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioLandPageComponent } from './radio-land-page.component';

describe('RadioLandPageComponent', () => {
  let component: RadioLandPageComponent;
  let fixture: ComponentFixture<RadioLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
