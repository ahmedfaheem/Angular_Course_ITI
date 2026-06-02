import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodfilter } from './prodfilter';

describe('Prodfilter', () => {
  let component: Prodfilter;
  let fixture: ComponentFixture<Prodfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodfilter],
    }).compileComponents();

    fixture = TestBed.createComponent(Prodfilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
