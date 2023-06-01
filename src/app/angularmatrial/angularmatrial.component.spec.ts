import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmatrialComponent } from './angularmatrial.component';

describe('AngularmatrialComponent', () => {
  let component: AngularmatrialComponent;
  let fixture: ComponentFixture<AngularmatrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularmatrialComponent]
    });
    fixture = TestBed.createComponent(AngularmatrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
