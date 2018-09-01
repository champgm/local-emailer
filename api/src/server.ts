import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import expressBunyan from 'express-bunyan-logger';
import morgan from 'morgan';
import { StaticRouter } from './routing/StaticRouter';
import { EmailRouter } from './routing/EmailRouter';

const expressApp = express();
expressApp.use(morgan('common'));
expressApp.use(bodyParser.json());
expressApp.use(compression());

expressApp.use(new StaticRouter().init().getRouter());
expressApp.use(new EmailRouter().init().getRouter());

expressApp.use(expressBunyan.errorLogger());
expressApp.listen(4200, () => {
  console.log('Listening on port 4200');
});


