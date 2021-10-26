import { TestBed } from '@angular/core/testing';

import { SendEquipoService } from './send-equipo.service';

describe('SendEquipoService', () => {
  let service: SendEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
