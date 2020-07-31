import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPGDataComponent } from './epgdata.component';

describe('EPGDataComponent', () => {
  let component: EPGDataComponent;
  let fixture: ComponentFixture<EPGDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPGDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPGDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
