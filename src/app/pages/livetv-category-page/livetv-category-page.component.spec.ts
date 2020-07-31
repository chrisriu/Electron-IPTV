import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetvCategoryPageComponent } from './livetv-category-page.component';

describe('LivetvCategoryPageComponent', () => {
  let component: LivetvCategoryPageComponent;
  let fixture: ComponentFixture<LivetvCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetvCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetvCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
