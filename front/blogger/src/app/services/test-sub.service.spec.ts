import { TestBed } from '@angular/core/testing';

import { TestSubService } from './test-sub.service';

describe('TestSubService', () => {
  let service: TestSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
