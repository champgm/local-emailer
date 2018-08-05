import * as express from 'express';
import * as path from 'path';
import { Router } from 'express';

export class StaticRouter {
  private router: Router;
  private frontend: string;

  constructor() {
    this.router = express.Router();
    this.frontend = path.join(__dirname, '../../dist');
  }

  public init(): StaticRouter {
    this.router.use('/', express.static(this.frontend));
    return this;
  }

  public getRouter(): Router {
    return this.router;
  }
}
