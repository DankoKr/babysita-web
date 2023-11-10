import * as yup from "yup";

export const jobApplicationSchema = yup.object().shape({
  description: yup.string().required("Required"),
});
