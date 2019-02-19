import { TestBed } from '@angular/core/testing';

import { OpeningpageService } from './openingpage.service';

describe('OpeningpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpeningpageService = TestBed.get(OpeningpageService);
    expect(service).toBeTruthy();
  });
});
