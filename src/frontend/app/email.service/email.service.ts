import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmailService {

  constructor(private httpClient: HttpClient) {
  }

  async sendEmail(recipients: string[], subject: string, body: string) {
    try {
      const response = await this.httpClient.post('/email', {
        recipients,
        subject,
        body
      }).toPromise();
      console.log(`Got email response: ${JSON.stringify(response)}`);
    } catch (error) {
      console.log(`Email sending unsuccessful`);
    }
  }
}
