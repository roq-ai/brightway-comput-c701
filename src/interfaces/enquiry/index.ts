import { UserInterface } from 'interfaces/user';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface EnquiryInterface {
  id?: string;
  question: string;
  student_id?: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface EnquiryGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  student_id?: string;
  course_id?: string;
}
