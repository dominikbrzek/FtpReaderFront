import {Component, OnInit} from '@angular/core';
import {FtpConfig} from "../model/ftp-config";
import {FtpConfigService} from "../ftp-config.service";

@Component({
  selector: 'app-configs-list',
  templateUrl: './configs-list.component.html',
  styleUrls: ['./configs-list.component.css']
})
export class ConfigsListComponent implements OnInit {

  ftpConfigs: FtpConfig[] = [];

  constructor(private ftpConfigService: FtpConfigService) {
  }

  ngOnInit(): void {
    this.getFtpConfigs();
  }

  private getFtpConfigs() {
    this.ftpConfigService.getFtpConfigs().subscribe(data =>
      this.ftpConfigs = data.configs);
  }

}
