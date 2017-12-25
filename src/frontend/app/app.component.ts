import { Component, OnInit, EventEmitter } from '@angular/core';
import { ConfigurationService } from './configuration.service/configuration.service';
import { EmailService } from './email.service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public focusSubject = new EventEmitter<boolean>();
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
  }

  ngOnInit(): void { }

  clear(): void {
    this.subject = '';
    this.body = '';
    this.emailSelection = this.configurationService.getDefaultRecipients();
    this.focusSubject.emit(true);
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
      this.snackBar.open(result, '', { duration: 1000, verticalPosition: 'top' });
      this.disableSubmit = false;
      this.clear();
    } catch (error) {
      this.snackBar.dismiss();
      this.snackBar.open(error.message, '', { duration: 5000, verticalPosition: 'top' });
      this.disableSubmit = false;
    }
  }
}
