import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgatComponent } from './forgat.component';

describe('ForgatComponent', () => {
  let component: ForgatComponent;
  let fixture: ComponentFixture<ForgatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgatComponent]
    });
    fixture = TestBed.createComponent(ForgatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
