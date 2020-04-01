import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogoutPageComponent } from './confirm-logout-page.component';

describe('ConfirmLogoutPageComponent', () => {
  let component: ConfirmLogoutPageComponent;
  let fixture: ComponentFixture<ConfirmLogoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLogoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
