import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';
import { EmailAccountInfo } from '../templates/EmailAccountInfo';
import { EmailServerInfo } from '../templates/EmailServerInfo';

@Injectable()
export class EmailService {
  server: EmailServerInfo;
  account: EmailAccountInfo;
  transporter: any;

  constructor(private configurationService: ConfigurationService) {
  }

  sendEmail(addresses: string, subject: string, body: string) {
  }
}
