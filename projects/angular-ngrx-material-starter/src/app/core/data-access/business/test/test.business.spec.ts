import { TestBed } from '@angular/core/testing';

import { TestBusiness } from './test.business';

describe('TestBusiness', () => {
  let service: TestBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
