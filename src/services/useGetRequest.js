import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/posters";

const useGetRequest = () => {
  const [data, setData] = useState(new Map());

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const responseData = new Map(Object.entries(response.data));
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useGetRequest;

