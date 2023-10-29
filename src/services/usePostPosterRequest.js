import axios from "axios";

const url = "http://localhost:8080/posters";

const usePostPosterRequest = (accessToken) => {
  const postData = async (values) => {
    try {
      await axios.post(url, values, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    } catch (error) {
      console.error(error.response);
      throw error;
    }
  };
  
  //state is now managed by Formik
  return { postData };
  
};

export default usePostPosterRequest;
