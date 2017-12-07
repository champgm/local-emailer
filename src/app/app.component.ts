import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private emailMap: any;
  private selectedEmail: string;

  constructor(private configurationService: ConfigurationService) { }

  async ngOnInit(): Promise<void> {
    this.emailMap = await this.configurationService.getEmails();
  }
}
