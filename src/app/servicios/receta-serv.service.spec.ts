import { TestBed } from '@angular/core/testing';

import { RecetaServService } from './receta-serv.service';

describe('RecetaServService', () => {
  let service: RecetaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
