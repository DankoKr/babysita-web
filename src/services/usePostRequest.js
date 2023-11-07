import axios from "axios";

const url = "http://localhost:8080";

const usePostRequest = (urlExtension, accessToken) => {
  const postData = async (values) => {
    try {
      await axios.post(url + urlExtension, values, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (error) {
      console.error(error.response);
      throw error;
    }
  };

  return { postData };
};

export default usePostRequest;
