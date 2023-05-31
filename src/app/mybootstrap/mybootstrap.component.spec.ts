import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybootstrapComponent } from './mybootstrap.component';

describe('MybootstrapComponent', () => {
  let component: MybootstrapComponent;
  let fixture: ComponentFixture<MybootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MybootstrapComponent]
    });
    fixture = TestBed.createComponent(MybootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
