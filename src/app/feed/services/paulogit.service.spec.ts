import { TestBed } from '@angular/core/testing';

import { PaulogitService } from './paulogit.service';

describe('PaulogitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaulogitService = TestBed.get(PaulogitService);
    expect(service).toBeTruthy();
  });
});
