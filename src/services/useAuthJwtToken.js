import axios from "axios";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

const url = "http://localhost:8080/tokens";

const useAuthJwtToken = () => {
  const { login } = useContext(AuthContext);

  const performLogin = async (username, password) => {
    try {
      const resp = await axios.post(url, {username, password});
      login(resp.data.accessToken);
    } catch (error) {
        console.error("Login error:", error.response && error.response.data, error);
        throw error;
    }
  };

  return performLogin;
};

export default useAuthJwtToken;
