import { TestBed, inject } from '@angular/core/testing';

import { Myservice } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Myservice]
    });
  });

  it('should be created', inject([Myservice], (service: Myservice) => {
    expect(service).toBeTruthy();
  }));
});
