import React, { useEffect } from 'react';
import styles from './AccountPage.module.css';
import useGetUserByIdRequest from '../services/useGetUserByIdRequest';
import TokenManager from '../auth/TokenManager';

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
                <h2>Account Information</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
        </div>
    );
}

export default AccountPage;
