import express from 'express';

import Database from './db';

class App {
  public app: express.Application;

  public database: Database;

  constructor() {
    this.app = express();
    this.database = new Database();
    this.database.createConnection();

    this.routes();
  }

  routes() {
    this.app.route('/').get((req, res) => res.status(200).json({ result: 'hello world' }));
  }
}

export default new App();
