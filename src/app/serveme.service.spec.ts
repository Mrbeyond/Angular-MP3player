import { TestBed } from '@angular/core/testing';

import { ServemeService } from './serveme.service';

describe('ServemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServemeService = TestBed.get(ServemeService);
    expect(service).toBeTruthy();
  });
});
