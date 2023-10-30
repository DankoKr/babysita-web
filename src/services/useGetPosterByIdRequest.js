import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080/posters";

const useGetByIdRequest = (accessToken) => {
    const [poster, setPoster] = useState(null);
    const navigate = useNavigate();

    const fetchDataById = async (id) => {
        try {
            const response = await axios.get(`${url}/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setPoster(response.data);
        } catch (error) {
            let errorMessage = '';
            if (error.response) {
                if (error.response.status === 404) {
                    errorMessage = 'The poster you are looking for does not exist.';
                } else {
                    errorMessage = 'Bad request. Please try again.';
                }
            } else if (error.request) {
                errorMessage = 'Unable to connect. Please check your internet connection.';
            } else {
                errorMessage = 'An unexpected error occurred.';
            }
    
            navigate("*", { state: { errorMessage: errorMessage } });
        } 
    };
    
    return [poster, fetchDataById];
}

export default useGetByIdRequest;


