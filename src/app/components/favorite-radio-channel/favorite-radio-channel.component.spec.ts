import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRadioChannelComponent } from './favorite-radio-channel.component';

describe('FavoriteRadioChannelComponent', () => {
  let component: FavoriteRadioChannelComponent;
  let fixture: ComponentFixture<FavoriteRadioChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteRadioChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteRadioChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
