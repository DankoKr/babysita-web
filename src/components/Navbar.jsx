import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className={styles.navBar}>
        <h1>Babysita</h1>

        <div className={styles['links']}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/account">My Account</NavLink>
          <NavLink to="/posters">Posters</NavLink>
          <NavLink to="/create-poster">Create Poster</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>

      </nav>
    );
  }
   
  export default Navbar;