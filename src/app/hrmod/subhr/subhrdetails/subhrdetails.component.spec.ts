import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhrdetailsComponent } from './subhrdetails.component';

describe('SubhrdetailsComponent', () => {
  let component: SubhrdetailsComponent;
  let fixture: ComponentFixture<SubhrdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubhrdetailsComponent]
    });
    fixture = TestBed.createComponent(SubhrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
