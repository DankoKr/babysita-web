import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { posterSchema } from '../schemas/posterSchema';
import CustomInput from '../components/CustomInput';
import usePutRequest from '../services/usePutRequest';
import useGetByIdRequest from '../services/useGetByIdRequest';
import styles from './CreatePosterPage.module.css';

const EditPosterPage = () => {
    const { id } = useParams();
    const { putData } = usePutRequest();
    const poster = useGetByIdRequest(id);
    const navigate  = useNavigate();
  
    const onSubmit = async (values, actions) => {
      try {
          await putData(id, values);
          actions.resetForm();
          navigate(-1);
      } catch (error) {
          console.error(error);
      }
    }

    if (!poster) {
        return <div>Loading...</div>;
    }

    return (
        <Formik 
            initialValues={{
                title: poster.title || "",
                description: poster.description || "",
                imageUrl: poster.imageUrl || "",
                eventDate: poster.eventDate || ""
            }}                
            validationSchema={posterSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form className={styles.form}>
                    <CustomInput 
                        label='Title'
                        name='title'
                        type='text'     
                    />
                    <CustomInput 
                        label='Description'
                        name='description'
                        type='text'     
                    />
                    <CustomInput 
                        label='ImageUrl'
                        name='imageUrl'
                        type='text'      
                    />
                    <CustomInput 
                        label='Date'
                        name='eventDate'
                        type='date'    
                    />
                    <button type='submit' className={styles.submitButton}>Submit</button>
                </Form>
            )}
        </Formik>
    );
}
 
export default EditPosterPage;
