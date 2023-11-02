import { NavLink } from "react-router-dom";
import styles from "./DataTable.module.css";

const DataTable = ({ data, handleDelete, columns, urlExtension }) => {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...data.entries()].map(([id, item]) => (
            <tr key={id}>
              {columns.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
              <td>
                <NavLink
                  to={`/view-${urlExtension}/${id}`}
                  className={styles.viewButton}
                >
                  View
                </NavLink>
                <NavLink
                  to={`/edit-${urlExtension}/${id}`}
                  className={styles.editButton}
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => handleDelete(id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
