import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
import * as expressBunyan from 'express-bunyan-logger';
import { StaticRouting } from './routing/staticRouting';

const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(compression());
expressApp.use(expressBunyan.errorLogger());

const routing: StaticRouting = new StaticRouting();
routing.init();
expressApp.use(routing.getRouter());

expressApp.listen(4200, () => {
  console.log('Listening on port 4200');
});

