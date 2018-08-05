import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as expressBunyan from 'express-bunyan-logger';
import * as morgan from 'morgan';
import { StaticRouter } from './routing/StaticRouter';
import { EmailRouter } from './routing/EmailRouter';

const expressApp = express();
expressApp.use(morgan('common'));
expressApp.use(bodyParser.json());
expressApp.use(compression());

// const routing: StaticRouter = new StaticRouter();
// routing.init();
// expressApp.use(routing.getRouter());

expressApp.use(new StaticRouter().init().getRouter());
expressApp.use(new EmailRouter().init().getRouter());

expressApp.use(expressBunyan.errorLogger());
expressApp.listen(4200, () => {
  console.log('Listening on port 4200');
});


