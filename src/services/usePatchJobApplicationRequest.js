import axios from "axios";

const url = "http://localhost:8080";

const usePatchRequest = (urlExtension, accessToken) => {
  const patchData = async (id, statusValue) => {
    try {
      await axios.patch(`${url + urlExtension}/${id}`, statusValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "text/plain",
        },
      });
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Error Response:", error.response);
      }
    }
  };

  return patchData;
};

export default usePatchRequest;
