import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';
import { configuration } from '../../environments/config';
import { EmailAccountInfo } from '../templates/EmailAccountInfo';
import { EmailServerInfo } from '../templates/EmailServerInfo';

@Injectable()
export class EmailService {
  server: EmailServerInfo;
  account: EmailAccountInfo;
  transporter: any;

  constructor(private configurationService: ConfigurationService) {
    this.server = configurationService.getEmailServerInfo();
    this.account = configurationService.getEmailAccountInfo();
  }

  sendEmail(addresses: string, subject: string, body: string) {
  }
}
