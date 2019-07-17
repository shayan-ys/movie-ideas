import { TestBed } from '@angular/core/testing';

import { MovieReaderService } from './movie-reader.service';

describe('MovieReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieReaderService = TestBed.get(MovieReaderService);
    expect(service).toBeTruthy();
  });
});
