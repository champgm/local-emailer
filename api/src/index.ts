import awsServerlessExpress from 'aws-serverless-express';
import { expressApp } from './server';

const server = awsServerlessExpress.createServer(expressApp);
export function handler(event, context, callback) {
  console.log(`Index handler was invoked.`);
  awsServerlessExpress.proxy(server, event, context);
  console.log(`Index handler ended`);
}
