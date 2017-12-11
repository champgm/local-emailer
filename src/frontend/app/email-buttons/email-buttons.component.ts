import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';

@Component({
  selector: 'app-email-buttons',
  templateUrl: './email-buttons.component.html',
  styleUrls: ['./email-buttons.component.css']
})
export class EmailButtonsComponent implements OnInit {

  @Input()
  recipients: string[];
  @Input()
  emailSelection: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log(`EMAIL RECIPIENTS: ${this.recipients}`);
    this.recipients.forEach((key) => {
      this.emailSelection[key] = false;
    });
  }
}
