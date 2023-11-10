import axios from "axios";

const url = "http://localhost:8080/posters";

const usePutRequest = (accessToken) => {
    const putData = async (id, values) => {
        try {
          const resp = await axios.put(`${url}/${id}`, values, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        } catch (error) {
          console.error(error.response);
          throw error;
        }
      };
      
      //state is now managed by Formik
      return { putData };
      
}
 
export default usePutRequest;