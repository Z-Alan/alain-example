import { TestBed } from '@angular/core/testing';

import { ControlSearchService } from './control-search-communication.service';

describe('ControlSearchService', () => {
  let service: ControlSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
