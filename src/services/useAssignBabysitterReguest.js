import axios from "axios";

const url = "http://localhost:8080/posters";

const useAssignBabysitterRequest = (accessToken) => {
  const assignBabysitter = async (posterId, babysitterId) => {
    try {
      await axios.patch(
        //Some server configurations expect a request body even if it's empty -> {}
        `${url}/${posterId}/assign/${babysitterId}`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    } catch (error) {
      console.error(error.response);
    }
  };

  return assignBabysitter;
};

export default useAssignBabysitterRequest;
