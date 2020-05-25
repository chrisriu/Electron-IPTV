import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VODPageComponent } from './vodpage.component';

describe('VODPageComponent', () => {
  let component: VODPageComponent;
  let fixture: ComponentFixture<VODPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VODPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VODPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
