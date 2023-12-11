import { useEffect, useState } from 'react';
import useDeleteRequest from '../services/useDeleteRequest';
import useGetRequest from '../services/useGetRequest';
import styles from './AdminPage.module.css';
import TokenManager from '../auth/TokenManager';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import useSearchUsernameRequest from '../services/useSearchUsernameRequest';

const UsersManagementPage = () => {
  const token = TokenManager.getAccessToken();
  const [usersData, fetchUsers] = useGetRequest('/users', token);
  const deleteUser = useDeleteRequest('/users', token);
  const { data, searchedData } = useSearchUsernameRequest(token);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    if (!isSearchActive) {
      fetchUsers();
    }
  }, [isSearchActive]);

  const handleDelete = async (id) => {
    const confirmDeletion = window.confirm('Are you sure you want to delete?');
    if (confirmDeletion) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  const handleSearch = async (username) => {
    await searchedData(username);
    setIsSearchActive(true);
  };

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'username', header: 'Username' },
    { key: 'email', header: 'Email' },
  ];

  const displayData = isSearchActive ? data : usersData;

  if (!usersData) return <p className={styles.loadingMessage}>Loading...</p>;
  else if (usersData.size === 0) {
    return <p className={styles.loadingMessage}>NO DATA...</p>;
  }

  return (
    <div className={styles.usersManagement}>
      <SearchBar onSearch={handleSearch} />
      <DataTable
        data={displayData}
        handleDelete={handleDelete}
        columns={columns}
        urlExtension={'user'}
        isEditable={false}
      />
    </div>
  );
};

export default UsersManagementPage;
