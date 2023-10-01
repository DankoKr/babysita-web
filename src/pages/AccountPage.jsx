import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from './AccountPage.module.css';

const AccountPage = () => {
    //const [accountData, setAccountData] = useState(null);
    
    // if (!accountData) {
    //     return <div className={styles.loading}>Loading account data...</div>;
    // }
    
    return ( 
        <div className={styles.accountContainer}>
            <div className={styles.accountData}>
                <h2>Account Information</h2>
                {/* <p><strong>Username:</strong> {accountData.username}</p>
                <p><strong>Email:</strong> {accountData.email}</p> */}
            </div>
        </div>
    );
}

export default AccountPage;
