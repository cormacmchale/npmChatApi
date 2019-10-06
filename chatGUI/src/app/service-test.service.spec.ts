import { TestBed } from '@angular/core/testing';

import { ServiceTestService } from './service-test.service';

describe('ServiceTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTestService = TestBed.get(ServiceTestService);
    expect(service).toBeTruthy();
  });
});
