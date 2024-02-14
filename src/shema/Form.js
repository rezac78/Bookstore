import * as Yup from "yup";

export const FormValidationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  author: Yup.string().required("author is required"),
  genre: Yup.string().required("genre is required"),
});
export const FormValidationLoginSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string().required("password is required"),
});
