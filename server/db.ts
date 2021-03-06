import mongoose from 'mongoose';

class Database {
  private dbUrl = 'mongodb://localhost/node-api-projects';

  private dbConnection: mongoose.Connection | undefined;

  // eslint-disable-next-line
  constructor() {}

  createConnection() {
    mongoose.connect(this.dbUrl);
    this.logger(this.dbUrl);
  }

  // eslint-disable-next-line
  logger(uri: any) {
    this.dbConnection = mongoose.connection;
    this.dbConnection.on('connected', () => { console.log('Mongoose is connected.'); });
    this.dbConnection.on('error', (error: Error) => { console.error.bind(console, `Connection error:${error}`); });
  }
}

export default Database;
