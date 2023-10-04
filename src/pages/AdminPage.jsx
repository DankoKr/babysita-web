import { useEffect } from 'react';
import useDeleteRequest from "../services/useDeleteRequest";
import useGetRequest from "../services/useGetRequest";
import styles from './AdminPage.module.css';
import { NavLink } from "react-router-dom";

const AdminPage = () => {
    const [posterData, fetchPosters] = useGetRequest();
    const deletePoster = useDeleteRequest();

    useEffect(() => {
        fetchPosters();  
    }, [fetchPosters]);

    const handleDelete = async (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete?");
        if (confirmDeletion) {
            await deletePoster(id);
            fetchPosters();  // Refetch the data after deleting a poster
        }
    };

    if (!posterData) 
        return <p className={styles.loadingMessage}>Loading...</p>;
    else if (posterData.size === 0){
        return <p className={styles.loadingMessage}>NO DATA...</p>;
    };

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {[...posterData.entries()].map(([id, poster]) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{poster.title}</td>
                            <td>{poster.description}</td>
                            <td>
                                <NavLink to={`/view/${id}`} className={styles.viewButton}>View</NavLink>
                                <NavLink to={`/edit/${id}`} className={styles.editButton}>Edit</NavLink>
                                <button onClick={() => handleDelete(id)} className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;

