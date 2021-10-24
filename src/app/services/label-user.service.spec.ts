import { TestBed } from '@angular/core/testing';

import { LabelUserService } from './label-user.service';

describe('LabelUserService', () => {
  let service: LabelUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
