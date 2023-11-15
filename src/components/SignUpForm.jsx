import { Formik, Form } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import styles from "./LoginForm.module.css";
import Button from "./Button";
import usePostUserRequest from "../services/usePostUserRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthJwtToken from "../services/useAuthJwtToken";

const SignUpForm = () => {
  const { createUser } = usePostUserRequest();
  const [signUpError, setsignUpError] = useState(null);
  const navigate = useNavigate();
  const login = useAuthJwtToken();

  const onSubmit = async (values) => {
    try {
      await createUser(values);
      await login(values.username, values.password);
      navigate("/account");
    } catch (error) {
      setsignUpError(error.response.data);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
        role: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form className={styles.form}>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter username"
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <CustomSelect
            label="Role"
            name="role"
            placeholder="Select account role"
          >
            <option role="">Select account role</option>
            <option role="babysitter">babysitter</option>
            <option role="parent">parent</option>
          </CustomSelect>
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          {signUpError && <div className={styles.error}>{signUpError}</div>}
          <Button type="submit" text="Sign Up" />
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
