import axios from "axios";

const url = "http://localhost:8080/users";

const usePostUserRequest = () => {
  const createUser = async (values) => {
    try {
      await axios.post(url, values);
    } catch (error) {
      console.error(error.response);
      throw error;
    }
  };
  
  //state is now managed by Formik
  return { createUser };
  
};

export default usePostUserRequest;
