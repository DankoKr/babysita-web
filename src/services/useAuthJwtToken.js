import axios from "axios";
import TokenManager from './TokenManager';

const url = "http://localhost:8080/tokens";

const useAuthJwtToken = () => {
  const login = async (username, password) => {
    try {
      const resp = await axios.post(url, {username, password});
      TokenManager.setAccessToken(resp.data.accessToken);

    } catch (error) {
        console.error("Login error:", error.response.data);
      throw error;
    }
};
  
  return login;
  
};

export default useAuthJwtToken;
