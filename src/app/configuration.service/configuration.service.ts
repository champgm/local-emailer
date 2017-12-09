import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configuration } from '../../environments/config';

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getEmails(): any {
    return configuration.EMAILER_ADDRESSES;
  }
}
