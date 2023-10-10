import { Formik, Form } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import CustomInput from './CustomInput';
import styles from "./LoginForm.module.css";
import Button from './Button';

const LoginForm = () => {
    const onSubmit = async (values, actions) => {
        try {//not yet implemented
          console.log("Submited")
          actions.resetForm();
        } catch (error) {
          console.error("Error in get request", error);
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