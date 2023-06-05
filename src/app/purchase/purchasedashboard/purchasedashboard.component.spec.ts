import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedashboardComponent } from './purchasedashboard.component';

describe('PurchasedashboardComponent', () => {
  let component: PurchasedashboardComponent;
  let fixture: ComponentFixture<PurchasedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasedashboardComponent]
    });
    fixture = TestBed.createComponent(PurchasedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
