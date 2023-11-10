import { useContext } from 'react';
import useDeleteRequest from '../services/useDeleteRequest';
import styles from './AccountBox.module.css';
import Button from './Button';
import TokenManager from '../auth/TokenManager';
import AuthContext from "../auth/AuthContext";
import EdiText from 'react-editext';
import usePatchRequest from '../services/usePatchRequest';

const AccountBox = ({ user }) => {
    const { logout } = useContext(AuthContext);
    const token = TokenManager.getAccessToken()
    const deleteAccount = useDeleteRequest("/users", token);
    const patchData = usePatchRequest("/users", token);

    const fields = [
        { label: 'First Name', key: 'firstName', value: user.firstName },
        { label: 'Last Name', key: 'lastName', value: user.lastName },
        { label: 'Phone', key: 'phoneNumber', value: user.phoneNumber },
        { label: 'Address', key: 'address', value: user.address },
        { label: 'Age', key: 'age', value: user.age }
    ];

    const handleDelete = async () => {
        const confirmDeletion = window.confirm("Are you sure you want to delete your account?");
        if (confirmDeletion) {
            await deleteAccount(user.id);
            logout();
        }
    };

    const handleSave = async (key, newValue) => {
        const updatedData = {
            [key]: newValue
        };
        await patchData(user.id, updatedData);
    };

    return (
        <div className={styles.accountBox}>
            <div className={styles.accountCard}>
                <div className={styles.image}>
                    <button className={styles.btn}>
                        <img src="https://i.imgur.com/wvxPV9S.png" alt="User profile" />
                    </button>
                    <span className={styles.name}>{user.username}</span>
                    <span className={styles.email}>{user.email}</span>
                    <div className={styles.text}>
                        {fields.map(field => (
                            <div key={field.label}>
                                <span>{field.label}: </span>
                                <EdiText value={field.value} type="text" onSave={(val) => handleSave(field.key, val)} />
                            </div>
                        ))}
                        <p>Points: 1111111</p>
                    </div>
                    <div className={styles.buttonsBox}>
                        {user.role != "admin" && <Button text={"Delete profile"} onClick={handleDelete} />}
                        <Button text={"Logout"} onClick={logout} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountBox;
