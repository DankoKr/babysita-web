import React, { useEffect } from 'react';
import styles from './AccountPage.module.css';
import useGetUserByIdRequest from '../services/useGetUserByIdRequest';
import TokenManager from '../auth/TokenManager';
import AccountBox from '../components/AccountBox';

const AccountPage = () => {
    const { user, fetchDataById } = useGetUserByIdRequest(TokenManager.getAccessToken());


    useEffect(()=>{
        const claims = TokenManager.getClaims();
        if (claims && claims.userId) {
            fetchDataById(claims.userId);
        }
    }, []);
    
    
    if (!user) {
        return <div className={styles.loading}>Loading account data...</div>;
    }
    
    return ( 
        <div className={styles.accountContainer}>
            <div className={styles.accountData}>
              <AccountBox user={user}/>
            </div>
        </div>
    );
}

export default AccountPage;
