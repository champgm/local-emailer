import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configuration } from '../../../../.env.client';

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getRecipients(): string[] {
    return configuration.RECIPIENTS;
  }
}
