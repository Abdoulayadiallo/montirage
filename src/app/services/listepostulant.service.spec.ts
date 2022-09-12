import { TestBed } from '@angular/core/testing';

import { ListepostulantService } from './listepostulant.service';

describe('ListepostulantService', () => {
  let service: ListepostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListepostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
