import { useState } from "react";
import styles from "./LoginSignUpPage.module.css";

const LoginSignUpPage = () => {
  const [action, setAction] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className={styles.loginSignUpContainer}>
      <div className={styles.loginSignUpHeader}>
        <div className={styles.loginSignUpText}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <input type="text" placeholder="username" id="username" name="username" />
        </div>
        {action === "Sign Up" && (
          <div className={styles.inputField}>
            <input type="email" placeholder="email" id="email" name="email" />
          </div>
        )}
        <div className={styles.inputField}>
          <input type="password" placeholder="password" id="password" name="password" />
        </div>
        <div className={styles.submitContainer}>
          <button 
            type="button" 
            className={action === "Login" ? `${styles.submit} ${styles.active}` : styles.submit} 
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button 
            type="submit" 
            className={action === "Sign Up" ? `${styles.submit} ${styles.active}` : styles.submit} 
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginSignUpPage;
