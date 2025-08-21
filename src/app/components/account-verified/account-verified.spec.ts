import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerified } from './account-verified';

describe('AccountVerified', () => {
  let component: AccountVerified;
  let fixture: ComponentFixture<AccountVerified>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountVerified]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountVerified);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
