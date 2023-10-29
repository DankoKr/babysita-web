import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  const nav = [
    { path:     "/",               name: "Home",              isMenu: true,     isPrivate: false,   role: "any"},
    { path:     "/login",          name: "Login",             isMenu: false,    isPrivate: false,   role: "any"},
    { path:     "/account",        name: "Account",           isMenu: true,     isPrivate: true,    role: "any"},
    { path:     "/create-poster",  name: "Create Poster",     isMenu: true,     isPrivate: true,    role: "parent"},
    { path:     "/posters",        name: "Posters",           isMenu: true,     isPrivate: true,    role: "babysitter"},
    { path:     "/admin",          name: "PosterTable",       isMenu: true,     isPrivate: true,    role: "admin"},
  ]

  return (
    <nav className={styles.navBar}>
      <h1>Babysita</h1>
      <div className={styles['links']}>
        {nav.map((route) => {
          if ((user && route.isMenu && ((user.role === route.role) || route.role === "any")) || (!user && !route.isPrivate)) {
            return <NavLink key={route.path} to={route.path}>{route.name}</NavLink>
          }
          return null;
        })}
      </div>
    </nav>
  );
}

export default Navbar;
