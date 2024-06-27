/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceProductsService } from './service-products.service';

describe('Service: ServiceProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProductsService]
    });
  });

  it('should ...', inject([ServiceProductsService], (service: ServiceProductsService) => {
    expect(service).toBeTruthy();
  }));
});
