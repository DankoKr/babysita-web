import { useState } from "react";
import axios from "axios";

const url = "http://localhost:8080/posters";

const usePostRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [eventDate, setEventDate] = useState('');

  const postData = async () => {
    try {
      const resp = await axios.post(url, { title, description, image, eventDate });
    } catch (error) {
      console.error(error.response);
    }
  };

  return { postData, setTitle, setDescription, setImage, setEventDate };
};

export default usePostRequest;
