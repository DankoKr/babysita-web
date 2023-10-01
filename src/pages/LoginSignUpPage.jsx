import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import styles from "./LoginSignUpPage.module.css";

const LoginSignUpPage = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <div className={styles.actions}>
        <nav className={styles.navContainer}>
          <h3 
            className={action === "Login" ? styles.active : ""} 
            onClick={() => setAction("Login")}
          >
            Login
          </h3>
          <h3 
            className={action === "Sign up" ? styles.active : ""} 
            onClick={() => setAction("Sign up")}
          >
            Sign up
          </h3>
        </nav>
        <hr className={styles.separationLine}></hr>
      </div>
      {action === "Login" ? <LoginForm /> : <SignUpForm />};
    </div>
  );
}

export default LoginSignUpPage;
