import { useEffect } from "react";
import useDeleteRequest from "../services/useDeleteRequest";
import useGetRequest from "../services/useGetRequest";
import styles from "./AdminPage.module.css";
import TokenManager from "../auth/TokenManager";
import DataTable from "../components/DataTable";

const UsersManagementPage = () => {
  const [usersData, fetchUsers] = useGetRequest(
    "/users",
    TokenManager.getAccessToken()
  );
  const deleteUser = useDeleteRequest("/users", TokenManager.getAccessToken());

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  const columns = [
    { key: "username", header: "Username" },
    { key: "email", header: "Email" },
  ];

  if (!usersData) return <p className={styles.loadingMessage}>Loading...</p>;
  else if (usersData.size === 0) {
    return <p className={styles.loadingMessage}>NO DATA...</p>;
  }

  return (
    <DataTable
      data={usersData}
      handleDelete={handleDelete}
      columns={columns}
      urlExtension={"user"}
      isEditable={false}
    />
  );
};

export default UsersManagementPage;
