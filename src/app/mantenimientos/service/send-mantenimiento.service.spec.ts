import { TestBed } from '@angular/core/testing';

import { SendMantenimientoService } from './send-mantenimiento.service';

describe('SendMantenimientoService', () => {
  let service: SendMantenimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMantenimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
