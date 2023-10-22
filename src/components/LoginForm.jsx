import { Formik, Form } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import CustomInput from './CustomInput';
import styles from "./LoginForm.module.css";
import Button from './Button';
import { useState } from 'react';
import TokenManager from '../services/TokenManager';
import useAuthJwtToken from '../services/useAuthJwtToken';

const LoginForm = () => {
  const login = useAuthJwtToken();
  //const [claims, setClaims] = useState(TokenManager.getClaims());

    const onSubmit = async (values) => {
        try {
          await login(values.username, values.password);
          console.log('Works?');
        } catch (error) {
          console.log('Invalid...');
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