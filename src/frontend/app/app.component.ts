import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service/configuration.service';
import { EmailService } from './email.service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private emailService: EmailService,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.recipients = this.configurationService.getRecipients();
  }

  async submit(): Promise<void> {
    try {
      this.snackBar.open('Sending...');
      const recipients = Object.keys(this.emailSelection).filter(key => {
        if (this.emailSelection[key]) {
          return key;
        }
      });
      const result = await this.emailService.sendEmail(recipients, this.subject, this.body);
      this.snackBar.dismiss();
      this.snackBar.open(result, '', { duration: 2000 });
    } catch (error) {
      this.snackBar.open(error.toString(), '', { duration: 5000 });
    }
  }
}
