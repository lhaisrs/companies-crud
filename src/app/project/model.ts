import { EmployerModel } from '../employer/model';

export class ProjectModel {
  id: string;
  employers: EmployerModel[];
  name: string;
  deadline: Date;
  client: string;
}