import { GetFtpConfigsResponse } from './get-ftp-configs-response';
import {FtpConfig} from "./ftp-config";

describe('Response', () => {
  it('should create an instance', () => {
    expect(new GetFtpConfigsResponse([])).toBeTruthy();
  });
});
