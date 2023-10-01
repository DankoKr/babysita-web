import { Formik, Form } from 'formik';
import { signUpSchema } from '../schemas/signUpSchema';
import CustomInput from './CustomInput';
import styles from "./LoginForm.module.css";

const SignUpForm = () => {
    const onSubmit = async (values, actions) => {
        try {//not yet implemented
          console.log("Submited")
          actions.resetForm();
        } catch (error) {
          console.error("Error in post request", error);
        }
      }

    return (
        <Formik 
    initialValues={{username: "", password: ""}} 
    validationSchema={signUpSchema}
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
          label='Email'
          name='email'
          type='email'
          placeholder='Enter email'       
          />
          <CustomInput 
          label='Password'
          name='password'
          type='password'
          placeholder='Enter password'       
          />
          <CustomInput 
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          placeholder='Confirm password'       
          />
          <button type='submit' className={styles.submitBtn}>Sign Up</button>
        </Form>
      )}

    </Formik>
    );
}
 
export default SignUpForm;