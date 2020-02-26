import { TestBed } from '@angular/core/testing';

import { UtlisateurService } from './utlisateur.service';

describe('UtlisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtlisateurService = TestBed.get(UtlisateurService);
    expect(service).toBeTruthy();
  });
});
