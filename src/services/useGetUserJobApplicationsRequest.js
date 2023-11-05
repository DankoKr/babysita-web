import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/jobApplications/";

const useGetUserJobApplicationsRequest = (urlExtension, accessToken) => {
  const [data, setData] = useState([]);

  const fetchData = async (userId) => {
    try {
      const response = await axios(`${url + urlExtension}/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setData(response.data);
    } catch (error) {
      console.error(error.response);
    }
  };

  return [data, fetchData];
};

export default useGetUserJobApplicationsRequest;
