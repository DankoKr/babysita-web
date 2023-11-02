import styles from "./User.module.css";

const User = ({ user }) => {
  return (
    <div className={styles.userContainer}>
      {user ? (
        <div className={styles.userData}>
          <h2>User Information</h2>
          <img src={user.profileImage} alt={"User image"} />
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Full name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default User;
