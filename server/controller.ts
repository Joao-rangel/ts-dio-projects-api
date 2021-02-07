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
  private getProjects() {
    return model.find({});
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private getById(id: string) {
    return model.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private deleteById(id: string) {
    return model.deleteOne(id);
  }

  // eslint-disable-next-line
  private create(project: Omit<Project, 'createdAt'>) {
    return model.create(project);
  }

  // eslint-disable-next-line
  private updateOne(id: any, project: any) {
    return model.findOneAndUpdate(id, project);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  select(req: Request, res: Response) {
    this.getProjects()
      .then((projects: Project[]) => res.status(200).json({ result: projects }))
      .catch((err: Error) => res.status(400).json({ result: err }));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectOne(req: Request, res: Response) {
    const { id } = req.params;

    this.getById(id)
      .then((project: Project) => res.status(200).json({ result: project }))
      .catch((err: Error) => res.status(400).json({ result: err }));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  delete(req: Request, res: Response) {
    const { id } = req.params;

    this.deleteById(id)
      .then((project: Project) => res.status(200).json({ result: project }))
      .catch((err: Error) => res.status(400).json({ result: err }));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  insert(req: Request, res: Response) {
    const newProject = req.body;

    this.create(newProject)
      .then((project) => res.status(200).json({ result: project }))
      .catch((err: Error) => res.status(400).json({ result: err }));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  update(req: Request, res: Response) {
    const { id } = req.params;
    const projectUpdate = req.body;

    this.updateOne(id, projectUpdate)
      .then((project: Project) => {
        Object.assign(project, projectUpdate);
        res.status(200).json({
          result: project,
        });
      })
      .catch((err: Error) => res.status(400).json({ result: err }));
  }
}

export default Controller;
