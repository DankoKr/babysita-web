import axios from "axios";

const url = "http://localhost:8080/posters";

const useDeleteRequest = (accessToken) => {
    const deletePoster = async (id) => {
        try {
            await axios.delete(`${url}/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return deletePoster;
};


export default useDeleteRequest;
