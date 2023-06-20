import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyarryformComponent } from './myarryform.component';

describe('MyarryformComponent', () => {
  let component: MyarryformComponent;
  let fixture: ComponentFixture<MyarryformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyarryformComponent]
    });
    fixture = TestBed.createComponent(MyarryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
