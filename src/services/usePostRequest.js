import axios from "axios";

const url = "http://localhost:8080/posters";

const usePostRequest = () => {
  const postData = async (values) => {
    try {
      const resp = await axios.post(url, values);
    } catch (error) {
      console.error(error.response);
      throw error;
    }
  };
  
  //state is now managed by Formik
  return { postData };
  
};

export default usePostRequest;
