import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VodCategoryPageComponent } from './vod-category-page.component';

describe('VodCategoryPageComponent', () => {
  let component: VodCategoryPageComponent;
  let fixture: ComponentFixture<VodCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VodCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
