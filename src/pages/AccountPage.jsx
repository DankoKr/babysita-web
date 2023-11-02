import React, { useEffect } from 'react';
import styles from './AccountPage.module.css';
import useGetUserByIdRequest from '../services/useGetUserByIdRequest';
import TokenManager from '../auth/TokenManager';
import AccountBox from '../components/AccountBox';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const { user, fetchDataById } = useGetUserByIdRequest(TokenManager.getAccessToken());
    const navigate = useNavigate();

    useEffect(()=>{
        const claims = TokenManager.getClaims();
        if (claims && claims.userId) {
            fetchDataById(claims.userId);
        }
    }, []);

    const onSubmit = () =>{
        navigate('/my-posters', { state: { userId: user.id } });
    }
    
    if (!user) {
        return <div className={styles.loading}>Loading account data...</div>;
    }
    
    return ( 
        <div className={styles.accountContainer}>
            <div className={styles.accountData}>
              <AccountBox user={user}/>
              {user.role != "admin" && <Button text='My posters' onClick={onSubmit}/>}
            </div>
        </div>
    );
}

export default AccountPage;
