import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivevjsPlayerComponent } from './livevjs-player.component';

describe('LivevjsPlayerComponent', () => {
  let component: LivevjsPlayerComponent;
  let fixture: ComponentFixture<LivevjsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivevjsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivevjsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
