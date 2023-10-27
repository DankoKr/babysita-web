import styles from './AccountBox.module.css';
import Button from './Button';

const AccountBox = ({user}) => {
    return (
        <div className={styles.accountBox}>
            <div className={styles.accountCard}>
                <div className={styles.image}>
                    <button className={styles.btn}>
                        <img src="https://i.imgur.com/wvxPV9S.png" alt="User profile" />
                    </button>
                    <span className={styles.name}>{user.username}</span>
                    <span className={styles.email}>{user.email}</span>
                    <div className={styles.buttonsBox}>
                        <Button text={"Edit profile"}/>
                        <Button text={"Delete profile"}/>
                    </div>
                    <div className={styles.text}>
                      <h3>Details: </h3>
                      <p>Name: {user.firstName} {user.lastName}</p>
                      <p>Phone: {user.phoneNumber}</p>
                      <p>Address: {user.address}</p>
                      <p>Age: {user.age}</p>
                      <p>Points: {user.age}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default AccountBox;