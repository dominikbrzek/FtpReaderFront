import {Component, OnInit} from '@angular/core';
import {FtpConfig} from "../model/ftp-config";
import {FtpConfigService} from "../service/ftp-config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-configs-list',
  templateUrl: './configs-list.component.html',
  styleUrls: ['./configs-list.component.css']
})
export class ConfigsListComponent implements OnInit {

  ftpConfigs: FtpConfig[] = [];

  constructor(private ftpConfigService: FtpConfigService, private router: Router) {
  }

  ngOnInit(): void {
    this.getFtpConfigs();
  }

  private getFtpConfigs() {
    this.ftpConfigService.getFtpConfigs().subscribe(data =>
      this.ftpConfigs = data.configs);
  }

  updateConfig(id: string) {
    this.router.navigate(["config-details", id])

  }

  deleteConfig(id: string) {
    this.ftpConfigService.deleteFtpConfig(id).subscribe({complete: console.info});
    this.ftpConfigs = this.ftpConfigs.filter(config => config.id !== id);
  }

}
