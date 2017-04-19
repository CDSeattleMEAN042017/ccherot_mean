/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WidgetServiceService } from './widget-service.service';

describe('WidgetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetServiceService]
    });
  });

  it('should ...', inject([WidgetServiceService], (service: WidgetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
