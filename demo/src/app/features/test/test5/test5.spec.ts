import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test5 } from './test5';

describe('Test5', () => {
  let component: Test5;
  let fixture: ComponentFixture<Test5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test5],
    }).compileComponents();

    fixture = TestBed.createComponent(Test5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
