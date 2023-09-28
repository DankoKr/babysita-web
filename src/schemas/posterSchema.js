import * as yup from "yup";

export const posterSchema = yup.object().shape({
  title: yup.string().min(2, "Title must be at least 2 chars").max(200, "Title must be max 200 chars").required("Required"),
  description: yup.string().min(2, "Description must be at least 2 chars").max(500, "Description must be max 500 chars").required("Required"),
  imageUrl: yup.string().required("Required"),
  date: yup.string().required("Date is required")
});
