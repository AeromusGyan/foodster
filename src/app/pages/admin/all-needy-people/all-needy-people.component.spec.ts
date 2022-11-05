import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNeedyPeopleComponent } from './all-needy-people.component';

describe('AllNeedyPeopleComponent', () => {
  let component: AllNeedyPeopleComponent;
  let fixture: ComponentFixture<AllNeedyPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNeedyPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNeedyPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
