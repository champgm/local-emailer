import * as express from 'express';
import * as path from 'path';
import { Router } from 'express';


export class StaticRouting {
  router: Router;
  frontend: string;

  constructor() {
    this.router = express.Router();
    this.frontend = path.join(__dirname, '../../dist');
  }

  init(): void {
    this.router.use('/', express.static(this.frontend));
  }

  getRouter(): Router {
    return this.router;
  }
}

