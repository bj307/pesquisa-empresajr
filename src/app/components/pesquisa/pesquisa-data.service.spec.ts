import { TestBed } from '@angular/core/testing';

import { PesquisaDataService } from './pesquisa-data.service';

describe('PesquisaDataService', () => {
  let service: PesquisaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
