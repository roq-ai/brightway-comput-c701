import * as yup from 'yup';

export const enquiryValidationSchema = yup.object().shape({
  question: yup.string().required(),
  student_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
