import { TestBed } from '@angular/core/testing';

import { FtpConfigService } from './ftp-config.service';

describe('FtpConfigService', () => {
  let service: FtpConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtpConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
