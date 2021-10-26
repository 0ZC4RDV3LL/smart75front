import { TestBed } from '@angular/core/testing';

import { SendEmpleadoService } from './send-empleado.service';

describe('SendEmpleadoService', () => {
  let service: SendEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
