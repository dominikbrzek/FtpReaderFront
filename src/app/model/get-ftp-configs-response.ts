import {FtpConfig} from "./ftp-config";

export class GetFtpConfigsResponse {
  constructor(configs: FtpConfig[]) {
    this.configs = configs;
  }

  configs: FtpConfig[];
}
