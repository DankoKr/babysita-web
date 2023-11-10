import axios from "axios";

const url = "http://localhost:8080";

const useDeleteRequest = (urlExtension, accessToken) => {
    const deleteData = async (id) => {
        try {
            await axios.delete(`${url + urlExtension}/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return deleteData;
};


export default useDeleteRequest;
