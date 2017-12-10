import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../configuration.service/configuration.service';

@Component({
  selector: 'app-email-buttons',
  templateUrl: './email-buttons.component.html',
  styleUrls: ['./email-buttons.component.css']
})
export class EmailButtonsComponent implements OnInit {

  @Input()
  emailMap: any;
  @Input()
  emailSelection: any = {};

  emailKeys: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(`EMAIL MAP: ${this.emailMap}`);
    this.emailKeys = Object.keys(this.emailMap).sort().reverse();
    this.emailKeys.forEach((key) => {
      this.emailSelection[key] = false;
    });
  }
}
