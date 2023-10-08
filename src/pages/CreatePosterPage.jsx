import React from 'react';
import usePostRequest from '../services/usePostRequest';
import { Formik, Form } from 'formik';
import { posterSchema } from '../schemas/posterSchema';
import styles from './CreatePosterPage.module.css';
import CustomInput from '../components/CustomInput';

const CreatePosterPage = () => {
  const { postData } = usePostRequest();
  
  const onSubmit = async (values, actions) => {
    try {
      await postData(values);
      actions.resetForm();
    } catch (error) {
      console.error("Error in post request", error);
    }
  }

  return (
    <Formik 
    initialValues={{title: "", description: "", imageUrl: "", eventDate: "", isAppointed: false}} 
    validationSchema={posterSchema}
    onSubmit={onSubmit}
    >
      {(props) => (
        <Form className={styles.form}>
          <CustomInput 
          label='Title'
          name='title'
          type='text'
          placeholder='Enter poster title'       
          />
          <CustomInput 
          label='Description'
          name='description'
          type='text'
          placeholder='Enter poster description'       
          />
          <CustomInput 
          label='ImageUrl'
          name='imageUrl'
          type='text'
          placeholder='Enter poster imageUrl'       
          />
          <CustomInput 
          label='Date'
          name='eventDate'
          type='date'
          placeholder='Enter poster date'       
          />
          <button type='submit' className={styles.submitButton}>Submit</button>
        </Form>
      )}

    </Formik>

  );
};

export default CreatePosterPage;
