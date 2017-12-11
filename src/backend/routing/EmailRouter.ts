import * as express from 'express';
import * as path from 'path';
import { Router } from 'express';
import { emailHandler } from '../controllers/emailHandler';

export class EmailRouter {
  router: Router;
  frontend: string;

  constructor() {
    this.router = express.Router();
    this.frontend = path.join(__dirname, '../../dist');
  }

  init(): EmailRouter {
    this.router.post('/email', emailHandler);
    return this;
  }

  getRouter(): Router {
    return this.router;
  }
}

