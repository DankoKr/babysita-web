import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { posterSchema } from '../schemas/posterSchema';
import CustomInput from '../components/CustomInput';
import usePutRequest from '../services/usePutRequest';
import useGetPosterByIdRequest from '../services/useGetPosterByIdRequest';
import styles from './CreatePosterPage.module.css';
import Button from '../components/Button';

const EditPosterPage = () => {
    const { id } = useParams();
    const { putData } = usePutRequest();
    const [poster, fetchDataById] = useGetPosterByIdRequest();
    const navigate  = useNavigate();

    useEffect(() => {
        fetchDataById(Number(id));
    }, [id]);
  
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
                eventDate: poster.eventDate || "",
                parentId: poster.parentId, 
                babysitterId: poster.babysitterId
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
                    <Button type='submit' text='Submit'/>
                </Form>
            )}
        </Formik>
    );
}
 
export default EditPosterPage;

