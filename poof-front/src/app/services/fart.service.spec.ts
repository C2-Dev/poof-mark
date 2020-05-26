import { TestBed } from '@angular/core/testing';

import { FartService } from './fart.service';

describe('FartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FartService = TestBed.get(FartService);
    expect(service).toBeTruthy();
  });
});
