import styles from './Footer.module.css'
import logo from '../assets/images/BABYSITA.png';

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles['container']}>

                <div className={styles['logo']}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles['column']}>
                    <h2>Dummy Title</h2>
                    <p>some dummy text</p>
                    <p>some dummy text</p>
                </div>
                <div className={styles['column']}>
                    <h2>Dummy Title</h2>
                    <p>some dummy text</p>
                    <p>some dummy text</p>
                </div>

            </div>
            <br/>
            <hr />
            <div className={styles['copyright']}>
                <p>Copyright © 2023 Babysita</p>
            </div>
        </div>
        
    );
}
 
export default Footer;