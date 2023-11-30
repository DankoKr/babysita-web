import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/users/search";

const useSearchUsernameRequest = (accessToken) => {
  const [data, setData] = useState([]);

  const searchedData = async (username) => {
    try {
      const response = await axios(`${url}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { username },
      });
      setData(response.data);
    } catch (error) {
      console.error(error.response);
    }
  };

  return { data, searchedData };
};

export default useSearchUsernameRequest;
