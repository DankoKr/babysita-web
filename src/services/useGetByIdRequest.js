import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/posters";

const useGetByIdRequest = (id) => {
    const [poster, setPoster] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/${id}`);
                setPoster(response.data);
            } catch (error) {
                console.error(error);
            } 
        };

        fetchData();       
    }, [id]);

    return poster;
}

export default useGetByIdRequest;
