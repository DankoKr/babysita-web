import { Formik, Form } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import CustomInput from './CustomInput';
import styles from "./LoginForm.module.css";
import Button from './Button';
import { useState } from 'react';
import useAuthJwtToken from '../services/useAuthJwtToken';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const login = useAuthJwtToken();
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
        await login(values.username, values.password);
        navigate("/account");
    } catch (error) {
        console.error(error);
        setLoginError("Login failed!");
    }
  }

    return (
        <Formik 
    initialValues={{username: "", password: ""}} 
    validationSchema={loginSchema}
    onSubmit={onSubmit}
    >
      {(props) => (
        <Form className={styles.form}>
          <CustomInput 
          label='Username'
          name='username'
          type='text'
          placeholder='Enter username'       
          />
          <CustomInput 
          label='Password'
          name='password'
          type='password'
          placeholder='Enter password'       
          />
          <Button type='submit' text='Login'/>
        </Form>
      )}

    </Formik>
    );
}
 
export default LoginForm;