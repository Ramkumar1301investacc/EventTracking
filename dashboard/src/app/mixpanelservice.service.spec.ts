import { TestBed } from '@angular/core/testing';

import { MixpanelserviceService } from './mixpanelservice.service';

describe('MixpanelserviceService', () => {
  let service: MixpanelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MixpanelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
