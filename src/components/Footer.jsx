import styles from './Footer.module.css';
import logo from '../assets/images/BABYSITA.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['container']}>
        <div className={styles['logo']}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={styles['column']}>
          <h2>Policy</h2>
          <p>Anyone can join</p>
          <p>Friendly environment</p>
        </div>
        <div className={styles['column']}>
          <h2>Address</h2>
          <p>The Netherlands, </p>
          <p>Fontys Eindhoven</p>
        </div>
      </div>
      <br />
      <hr />
      <div className={styles['copyright']}>
        <p>Copyright © 2023 Babysita</p>
      </div>
    </div>
  );
};

export default Footer;
