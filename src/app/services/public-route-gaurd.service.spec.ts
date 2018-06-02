/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicRouteGaurdService } from './public-route-gaurd.service';

describe('PublicRouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicRouteGaurdService]
    });
  });

  it('should ...', inject([PublicRouteGaurdService], (service: PublicRouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
