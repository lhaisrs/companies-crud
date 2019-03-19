import { ProjectModel } from '../project/model';
import { EmployerModel } from '../employer/model';

export class CompanyModel {
  id: string;
  employers: EmployerModel[];
  projects: ProjectModel[];
  name: string;
}