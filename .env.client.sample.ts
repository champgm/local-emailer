// import * as DotEnv from 'dotenv';

// DotEnv.config();

// const RECIPIENTS = Object.keys(JSON.parse(process.env.EMAIL_RECIPIENTS));

export const configuration = {
  RECIPIENTS: [
    'Work',
    'Personal',
    'My Buddy'
  ],
  // Optional. Controls which recipient, if any, is selected by default
  DEFAULT_RECIPIENTS: {
    'Personal': true
  }
};
