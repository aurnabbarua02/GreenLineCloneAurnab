import { TestBed } from '@angular/core/testing';

import { SharedNavItemsService } from './shared-nav-items.service';

describe('SharedNavItemsService', () => {
  let service: SharedNavItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedNavItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
