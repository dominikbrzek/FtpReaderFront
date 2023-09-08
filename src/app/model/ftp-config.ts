import { v4 as uuid } from 'uuid';

export class FtpConfig {
  id: string = uuid();
  name: string = "";
  address: string = "";
  login: string = "";
  password: string = "";
  filePath: string = "";
  port: number = 0;
  schedulingEnabled: boolean = false;

}
