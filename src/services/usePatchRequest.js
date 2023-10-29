import axios from "axios";

const url = "http://localhost:8080";

const usePatchRequest = (urlExtension, accessToken) => {
  const patchData = async (id, value) => {
    try {
      await axios.patch(`${url + urlExtension}/${id}`, value, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    } catch (error) {
      console.error(error.response);
    }
  };
  
  return patchData ;
  
};

export default usePatchRequest;