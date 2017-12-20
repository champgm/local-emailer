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
  disableSubmit = false;
  body = '';
  subject = '';

  constructor(
    private configurationService: ConfigurationService,
    private emailService: EmailService,
    public snackBar: MatSnackBar) {
    this.recipients = this.configurationService.getRecipients();
    this.emailSelection = this.configurationService.getDefaultRecipients();
    console.log(`EMAIL SELECTION: ${JSON.stringify(this.emailSelection)}`);
  }

  ngOnInit(): void {
  }

  clear(): void {
    console.log(`Before clear: ${JSON.stringify(this.emailSelection, null, 2)}`);
    this.subject = '';
    this.body = '';
    this.emailSelection = this.configurationService.getDefaultRecipients();
    console.log(`After clear: ${JSON.stringify(this.emailSelection, null, 2)}`);
  }

  async submit(): Promise<void> {
    try {
      this.disableSubmit = true;
      this.snackBar.open('Sending...', '', { verticalPosition: 'top' });
      const recipients = Object.keys(this.emailSelection).filter(key => {
        if (this.emailSelection[key]) {
          return key;
        }
      });
      const result = await this.emailService.sendEmail(recipients, this.subject, this.body);
      this.snackBar.dismiss();
      this.snackBar.open(result, '', { duration: 2000, verticalPosition: 'top' });
      this.disableSubmit = false;
      this.clear();
    } catch (error) {
      this.snackBar.dismiss();
      this.snackBar.open(error.message, '', { duration: 5000, verticalPosition: 'top' });
      this.disableSubmit = false;
    }
  }
}
