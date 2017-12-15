import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmailService {

  constructor(private httpClient: HttpClient) {
  }

  async sendEmail(recipients: string[], subject: string, body: string): Promise<string> {
    const response: any = await this.httpClient.post('/email', {
      recipients,
      subject,
      body
    }).toPromise();
    return response.sendResult;
  }
}
