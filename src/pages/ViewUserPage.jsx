import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ViewUserPage.module.css";
import useGetUserByIdRequest from "../services/useGetUserByIdRequest";
import Button from "../components/Button";
import TokenManager from "../auth/TokenManager";
import User from "../components/User";

const ViewUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user, fetchDataById } = useGetUserByIdRequest(
    TokenManager.getAccessToken()
  );

  useEffect(() => {
    fetchDataById(id);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <User user={user} />
      <Button onClick={handleGoBack} text="Go Back" />
    </div>
  );
};

export default ViewUserPage;
