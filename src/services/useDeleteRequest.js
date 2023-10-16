import axios from "axios";

const url = "http://localhost:8080/posters";

const useDeleteRequest = () => {
    const deletePoster = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return deletePoster;
};


export default useDeleteRequest;
