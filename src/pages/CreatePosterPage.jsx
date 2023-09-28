import React from 'react';
import usePostRequest from '../services/usePostRequest';
import { Formik, Form } from 'formik';
import { posterSchema } from '../schemas/posterSchema';
import styles from './CreatePosterPage.module.css';
import CustomInput from '../components/CustomInput';

const CreatePosterPage = () => {
  //const { postData, setTitle, setDescription, setImage, setEventDate } = usePostRequest();
  const onSubmit = async(resolve, actions)=> {
    console.log("Hui");
    actions.resetForm();  
  }

  return (
    <Formik 
    initialValues={{title: "", description: "", imageUrl: "", date: ""}} 
    validationSchema={posterSchema}
    onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
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
          name='date'
          type='date'
          placeholder='Enter poster date'       
          />
          <button type='submit'>Submit</button>
        </Form>
      )}

    </Formik>

  );
};

export default CreatePosterPage;
