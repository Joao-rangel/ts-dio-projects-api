import express from 'express';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.route('/').get((req, res) => res.status(200).json({ result: 'hello world' }));
  }
}

export default new App();
