/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import model from './model';

interface Project {
  name: string;
  description?: string;
  technologies: string[];
  createdAt: Date;
}

class Controller {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getProjects() {
    return model.find({});
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  select(req: Request, res: Response) {
    this.getProjects()
      .then((projects: Project[]) => res.status(200).json({ result: projects }))
      .catch((err: Error) => res.status(400).json({ result: err }));
  }
}

export default Controller;
