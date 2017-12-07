import { Injectable } from '@angular/core';
import { IConfiguration } from '../templates/configuration';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigurationService {
  config: IConfiguration;

  constructor(private http: HttpClient) { }

  async getEmails(): Promise<any> {
    if (!this.config) {
      const response = await this.http.get('assets/config.json').toPromise();
      this.config = JSON.parse(response.toString());
    }
    return this.config.EMAILER_ADDRESSES;
  }
}
