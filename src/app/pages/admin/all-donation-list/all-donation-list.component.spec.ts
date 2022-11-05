import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonationListComponent } from './all-donation-list.component';

describe('AllDonationListComponent', () => {
  let component: AllDonationListComponent;
  let fixture: ComponentFixture<AllDonationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDonationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDonationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
