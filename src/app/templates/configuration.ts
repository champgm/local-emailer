import { EmailServerInfo } from './EmailServerInfo';
import { EmailAccountInfo } from './EmailAccountInfo';

export interface IConfiguration {
  EMAILER_ADDRESSES: any;
  BUTTONS_PER_ROW: number;
  EMAIL_SERVER_INFO: EmailServerInfo;
  EMAIL_ACCOUNT_INFO: EmailAccountInfo;
}
