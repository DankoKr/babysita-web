import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080";

const useGetRequest = (urlExtension, accessToken) => {
    const [data, setData] = useState(new Map());

    const fetchData = async () => {
        try {
            const response = await axios(url + urlExtension, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            const responseData = new Map(Object.entries(response.data));
            setData(responseData);
        } catch (error) {
            console.error(error.response);
        }
    };

    return [data, fetchData];
};

export default useGetRequest;

