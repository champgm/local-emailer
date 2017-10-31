import { Component } from '@angular/core';
import { Email } from '../models/email';
import { environment } from '../../../.env';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html'
})
export class EmailFormComponent {
  email: Email;
  addresses: string[];
  submitted = false;

  constructor() {
    this.addresses = environment['EMAIL_ADDRESSES'];
    this.email = new Email(this.addresses[0], '', '');
  }

  onSubmit() {
    this.submitted = true;
  }

  newMessage() {
    this.email = new Email(this.addresses[0], '', '');
    this.submitted = false;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.email);
  }
}
