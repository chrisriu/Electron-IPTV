import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConfirmPageComponent } from './account-confirm-page.component';

describe('AccountConfirmPageComponent', () => {
  let component: AccountConfirmPageComponent;
  let fixture: ComponentFixture<AccountConfirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountConfirmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
