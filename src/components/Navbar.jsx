import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  const nav = [
    { path:     "/",         name: "Home",        isMenu: true,     isPrivate: false },
    { path:     "/login",    name: "Login",       isMenu: false,    isPrivate: false },
    { path:     "/account",  name: "Account",     isMenu: true,     isPrivate: true  },
  ]

  return (
    <nav className={styles.navBar}>
      <h1>Babysita</h1>
      <div className={styles['links']}>
        {nav.map((route) => {
          if ((user && route.isMenu) || (!user && !route.isPrivate)) {
            return <NavLink key={route.path} to={route.path}>{route.name}</NavLink>
          }
          return null;
        })}
      </div>
    </nav>
  );
}

export default Navbar;
