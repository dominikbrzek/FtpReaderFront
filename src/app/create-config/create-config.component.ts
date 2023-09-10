import {Component, OnInit} from '@angular/core';
import {FtpConfig} from "../model/ftp-config";
import {FtpConfigService} from "../service/ftp-config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})
export class CreateConfigComponent implements OnInit {
  ftpConfig: FtpConfig = new FtpConfig()

  constructor(private ftpConfigService: FtpConfigService, private router: Router) {
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.saveConfig();
    this.goToConfigsList();

  }

  saveConfig() {
    console.log(this.ftpConfig);
    this.ftpConfigService.addFtpConfig(this.ftpConfig).subscribe({complete: console.info});
  }

  goToConfigsList() {
    this.router.navigate(['/configs'])
  }

}
