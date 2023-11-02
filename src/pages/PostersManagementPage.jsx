import { useEffect } from "react";
import useDeleteRequest from "../services/useDeleteRequest";
import useGetRequest from "../services/useGetRequest";
import styles from "./AdminPage.module.css";
import TokenManager from "../auth/TokenManager";
import DataTable from "../components/DataTable";

const PostersManagementPage = () => {
  const [posterData, fetchPosters] = useGetRequest(
    "/posters",
    TokenManager.getAccessToken()
  );
  const deletePoster = useDeleteRequest(
    "/posters",
    TokenManager.getAccessToken()
  );

  useEffect(() => {
    fetchPosters();
  }, []);

  const handleDelete = async (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion) {
      await deletePoster(id);
      fetchPosters();
    }
  };

  const columns = [
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
  ];

  if (!posterData) return <p className={styles.loadingMessage}>Loading...</p>;
  else if (posterData.size === 0) {
    return <p className={styles.loadingMessage}>NO DATA...</p>;
  }

  return (
    <DataTable
      data={posterData}
      handleDelete={handleDelete}
      columns={columns}
      urlExtension={"poster"}
    />
  );
};

export default PostersManagementPage;
