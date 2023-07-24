import { InstituteInterface } from 'interfaces/institute';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  institute_id?: string;
  created_at?: any;
  updated_at?: any;

  institute?: InstituteInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  institute_id?: string;
}
