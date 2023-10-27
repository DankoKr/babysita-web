import { Formik, Form } from 'formik';
import { signUpSchema } from '../schemas/signUpSchema';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import styles from "./LoginForm.module.css";
import Button from './Button';
import usePostUserRequest from '../services/usePostUserRequest';

const SignUpForm = () => {
    const {createUser} = usePostUserRequest();

    const onSubmit = async (values, actions) => {
        try {
          await createUser(values);
          actions.resetForm();
        } catch (error) {
          console.error("Error in post request", error);
        }
      }

    return (
        <Formik 
    initialValues={{username: "", password: "", email: "", confirmPassword: "", role: ""}} 
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
          <CustomSelect
          label='Role'
          name='role'
          placeholder='Select account role'
          >
            <option role="">Select account role</option>
            <option role="babysitter">babysitter</option>
            <option role="parent">parent</option>
          </CustomSelect>
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
          <Button type='submit' text='Sign Up' />
        </Form>
      )}

    </Formik>
    );
}
 
export default SignUpForm;