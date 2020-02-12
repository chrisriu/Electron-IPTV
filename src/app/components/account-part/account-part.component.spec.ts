import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPartComponent } from './account-part.component';

describe('AccountPartComponent', () => {
  let component: AccountPartComponent;
  let fixture: ComponentFixture<AccountPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
