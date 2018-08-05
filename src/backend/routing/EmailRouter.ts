import * as express from 'express';
import * as path from 'path';
import { Router } from 'express';
import { emailHandler } from '../controllers/emailHandler';

export class EmailRouter {
  private router: Router;
  private frontend: string;

  constructor() {
    this.router = express.Router();
    this.frontend = path.join(__dirname, '../../dist');
  }

  public init(): EmailRouter {
    this.router.post('/email', emailHandler);
    return this;
  }

  public getRouter(): Router {
    return this.router;
  }
}

