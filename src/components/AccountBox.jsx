import { useContext, useState } from 'react';
import useDeleteRequest from '../services/useDeleteRequest';
import styles from './AccountBox.module.css';
import Button from './Button';
import TokenManager from '../auth/TokenManager';
import AuthContext from '../auth/AuthContext';
import EdiText from 'react-editext';
import usePatchRequest from '../services/usePatchRequest';

const AccountBox = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const token = TokenManager.getAccessToken();
  const deleteAccount = useDeleteRequest('/users', token);
  const patchData = usePatchRequest('/users', token);
  const [profileImage, setProfileImage] = useState(
    user.profileImage ||
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MXYD9n1S0PS6KSlP401QaQHaHa%26pid%3DApi&f=1&ipt=9bc37256346704220a54e0ab7080dbea132155af57ecc97660d331dc704bfaca&ipo=images'
  );

  const fields = [
    { label: 'First Name', key: 'firstName', value: user.firstName },
    { label: 'Last Name', key: 'lastName', value: user.lastName },
    { label: 'Phone', key: 'phoneNumber', value: user.phoneNumber },
    { label: 'Address', key: 'address', value: user.address },
    { label: 'Age', key: 'age', value: user.age },
  ];

  const handleDelete = async () => {
    const confirmDeletion = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (confirmDeletion) {
      await deleteAccount(user.id);
      logout();
    }
  };

  const handleSave = async (key, newValue) => {
    const updatedData = {
      [key]: newValue,
    };
    await patchData(user.id, updatedData);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setProfileImage(reader.result);
        const updatedData = {
          profileImage: reader.result,
        };
        await patchData(user.id, updatedData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.accountBox}>
      <div className={styles.accountCard}>
        <div className={styles.image}>
          <button className={styles.btn}>
            <img src={profileImage} alt='User profile image' />
          </button>

          <div className={styles.fileUploadBtn}>
            <label htmlFor='file-upload' className={styles.customFileBtn}>
              Change Image
            </label>
            <input
              id='file-upload'
              type='file'
              onChange={handleImageUpload}
              className={styles.fileInput}
            />
          </div>

          <span className={styles.name}>{user.username}</span>
          <span className={styles.email}>{user.email}</span>

          <div className={styles.text}>
            {fields.map((field) => (
              <div key={field.label}>
                <span>{field.label}: </span>
                <EdiText
                  value={field.value}
                  type='text'
                  onSave={(val) => handleSave(field.key, val)}
                />
              </div>
            ))}
          </div>

          <div className={styles.buttonsBox}>
            {user.role !== 'admin' && (
              <Button text={'Delete profile'} onClick={handleDelete} />
            )}
            <Button text={'Logout'} onClick={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBox;
