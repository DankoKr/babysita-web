import * as yup from "yup";

const passwordRules = "^(?=.*[A-Z])(?=.*[a-z]).{8,}$";

export const signUpSchema = yup.object().shape({
  username: yup.string().min(6, "Username should be at least 6 chars").required("Required"),
  password: yup.string().matches(passwordRules, {message: "Password is too weak"}).required("Required"),
  email: yup.string().email("Enter a valid email").required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null],"Passwords do not match").required("Required")
});