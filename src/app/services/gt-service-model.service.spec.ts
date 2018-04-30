import { TestBed, inject } from '@angular/core/testing';

import { GtServiceModelService } from './gt-service-model.service';

describe('GtServiceModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GtServiceModelService]
    });
  });

  it('should be created', inject([GtServiceModelService], (service: GtServiceModelService) => {
    expect(service).toBeTruthy();
  }));
});
