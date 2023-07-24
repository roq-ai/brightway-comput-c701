import { CourseInterface } from 'interfaces/course';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InstituteInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  course?: CourseInterface[];
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    course?: number;
    service?: number;
  };
}

export interface InstituteGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
