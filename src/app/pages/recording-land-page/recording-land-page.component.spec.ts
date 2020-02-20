import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingLandPageComponent } from './recording-land-page.component';

describe('RecordingLandPageComponent', () => {
  let component: RecordingLandPageComponent;
  let fixture: ComponentFixture<RecordingLandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordingLandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
