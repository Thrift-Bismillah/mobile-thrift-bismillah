import { TestBed } from '@angular/core/testing';

import { JurnalUmumService } from './jurnal-umum.service';

describe('JurnalUmumService', () => {
  let service: JurnalUmumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JurnalUmumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
