import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoLoadingPageComponent } from './account-info-loading-page.component';

describe('AccountInfoLoadingPageComponent', () => {
  let component: AccountInfoLoadingPageComponent;
  let fixture: ComponentFixture<AccountInfoLoadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoLoadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
