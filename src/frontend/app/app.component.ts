import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service/configuration.service';
import { EmailService } from './email.service/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipients: string[] = [];
  emailSelection: any = {};
  body = '';
  subject = '';

  constructor(
    private configurationService: ConfigurationService,
    private emailService: EmailService) { }

  ngOnInit(): void {
    this.recipients = this.configurationService.getRecipients();
  }

  submit(): void {
    console.log(`selectedEmail: ${JSON.stringify(this.emailSelection, null, 2)}`);
    console.log(`body: ${this.body}`);
    console.log(`subject: ${this.subject}`);
  }

}
