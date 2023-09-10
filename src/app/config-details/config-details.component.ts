import {Component, OnInit} from '@angular/core';
import {FtpConfigService} from "../service/ftp-config.service";
import {FtpConfig} from "../model/ftp-config";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-config-details',
  templateUrl: './config-details.component.html',
  styleUrls: ['./config-details.component.css']
})
export class ConfigDetailsComponent implements OnInit {

  ftpConfig: FtpConfig = new FtpConfig();
  id: string = "";

  constructor(private ftpConfigService: FtpConfigService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getFtpConfigById(this.id);
  }

  onSubmit() {
    this.ftpConfigService.updateFtpConfig(this.ftpConfig, this.id)
      .subscribe({complete: console.info});
    this.goToConfigsList()
  }

  goToConfigsList() {
    this.router.navigate(['/configs'])
  }

  getFtpConfigById(id: string) {
    this.ftpConfigService.getFtpConfigDetails(id).subscribe(data =>
      this.ftpConfig = data);
  }
}
