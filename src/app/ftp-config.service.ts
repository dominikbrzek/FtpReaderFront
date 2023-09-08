import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FtpConfig} from "./model/ftp-config";
import {GetFtpConfigsResponse} from "./model/get-ftp-configs-response";

@Injectable({
  providedIn: 'root'
})
export class FtpConfigService {

  private baseURL = "http://localhost:8080/api/v1/ftp/config"
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getFtpConfigs(): Observable<GetFtpConfigsResponse>{
    return this.httpClient.get<GetFtpConfigsResponse>(`${this.baseURL + "/configs"}`, this.httpOptions);
  }
}
