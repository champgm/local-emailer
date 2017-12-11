import * as express from 'express';
import * as path from 'path';
import { Router } from 'express';


export class StaticRouter {
  router: Router;
  frontend: string;

  constructor() {
    this.router = express.Router();
    this.frontend = path.join(__dirname, '../../../dist');
  }

  init(): StaticRouter {
    this.router.use('/', express.static(this.frontend));
    return this;
  }

  getRouter(): Router {
    return this.router;
  }
}

