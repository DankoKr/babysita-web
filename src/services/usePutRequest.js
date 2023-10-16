import axios from "axios";

const url = "http://localhost:8080/posters";

const usePutRequest = () => {
    const putData = async (id, values) => {
        try {
          const resp = await axios.put(`${url}/${id}`, values);
        } catch (error) {
          console.error(error.response);
          throw error;
        }
      };
      
      //state is now managed by Formik
      return { putData };
      
}
 
export default usePutRequest;