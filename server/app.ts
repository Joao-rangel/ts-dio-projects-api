import express from 'express';

import Database from './db';
import Controller from './controller';

class App {
  public app: express.Application;

  private database: Database;

  private controller: Controller;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.database = new Database();
    this.database.createConnection();
    this.controller = new Controller();
    this.routes();
  }

  routes() {
    this.app.route('/').get((req, res) => res.status(200).json({ result: 'hello world' }));
    this.app.route('/api/projects').get((req, res) => this.controller.select(req, res));
    this.app.route('/api/projects/:id').get((req, res) => this.controller.selectOne(req, res));
  }
}

export default new App();
