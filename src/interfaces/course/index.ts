import { EnquiryInterface } from 'interfaces/enquiry';
import { InstituteInterface } from 'interfaces/institute';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  institute_id?: string;
  created_at?: any;
  updated_at?: any;
  enquiry?: EnquiryInterface[];
  institute?: InstituteInterface;
  _count?: {
    enquiry?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  institute_id?: string;
}
