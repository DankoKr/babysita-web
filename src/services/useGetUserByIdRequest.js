import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080/users";

const useGetUserByIdRequest = (accessToken) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchDataById = async (id) => {
        try {
            const response = await axios.get(`${url}/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setUser(response.data);
        } catch (error) {
            let errorMessage = handleErrors(error);
            navigate("*", { state: { errorMessage: errorMessage } });
        } 
    };

    const handleErrors = (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    return 'Your session has expired. Please login again.';
                case 404:
                    return 'The user you are looking for does not exist.';
                default:
                    return 'Bad request. Please try again.';
            }
        } else if (error.request) {
            return 'Unable to connect. Please check your internet connection.';
        } else {
            return 'An unexpected error occurred.';
        }
    }
    
    return { user, fetchDataById };
}

export default useGetUserByIdRequest;
