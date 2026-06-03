import { TestBed } from '@angular/core/testing';

import { Studentservices } from './studentservices';

describe('Studentservices', () => {
  let service: Studentservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
