import { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8080/users';

const useGetUsersByIdRequest = (accessToken) => {
  const [users, setUsers] = useState(null);

  const fetchUsersById = async (firstUserId, secondUserId) => {
    try {
      const response = await axios.get(
        `${url}/${firstUserId}/${secondUserId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { users, fetchUsersById };
};

export default useGetUsersByIdRequest;
