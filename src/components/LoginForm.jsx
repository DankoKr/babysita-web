import { Formik, Form } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import CustomInput from './CustomInput';
import styles from './LoginForm.module.css';
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
      navigate('/account');
    } catch (error) {
      console.error('Login error: ', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('Login failed!');
      }
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div>
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
            {loginError && (
              <div className={styles.error} data-test-id='errorMessage'>
                {loginError}
              </div>
            )}
            <Button type='submit' text='Login' dataTestId='loginBtn' />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
