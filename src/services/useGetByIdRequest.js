import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/posters";

const useGetByIdRequest = () => {
    const [poster, setPoster] = useState(null);

    const fetchDataById = async (id) => {
        try {
            const response = await axios.get(`${url}/${id}`);
            setPoster(response.data);
        } catch (error) {
            console.error(error);
        } 
    };

    return [poster, fetchDataById];
}

export default useGetByIdRequest;

