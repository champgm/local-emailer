import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configuration } from '../../environments/config';
import { EmailServerInfo } from '../templates/EmailServerInfo';
import { EmailAccountInfo } from '../templates/EmailAccountInfo';

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getEmails(): any {
    return configuration.EMAILER_ADDRESSES;
  }

  getEmailServerInfo(): EmailServerInfo {
    return configuration.EMAIL_SERVER_INFO;
  }

  getEmailAccountInfo(): EmailAccountInfo {
    return configuration.EMAIL_ACCOUNT_INFO;
  }
}
