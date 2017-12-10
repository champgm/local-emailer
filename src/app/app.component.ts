import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service/configuration.service';
import { EmailService } from './email.service/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  emailMap: any;
  selectedEmail: string;
  buttonsWidth: number;
  body: string;
  bodyWidth: number;
  subject: string;
  subjectWidth: number;

  constructor(
    private configurationService: ConfigurationService,
    private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailMap = this.configurationService.getEmails();

  }

  submit(): void {
    console.log(`selectedEmail: ${this.selectedEmail}`);
    console.log(`buttonsWidth: ${this.buttonsWidth}`);
    console.log(`body: ${this.body}`);
    console.log(`bodyWidth: ${this.bodyWidth}`);
    console.log(`subject: ${this.subject}`);
    console.log(`subjectWidth: ${this.subjectWidth}`);
  }

}
