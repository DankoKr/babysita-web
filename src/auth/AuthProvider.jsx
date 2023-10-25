import React, { useState } from 'react';
import TokenManager from './TokenManager';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const existingUser = TokenManager.getClaims() || null;

    const [user, setUser] = useState(existingUser);

    const login = (token) => {
        try {
            const userDetails = TokenManager.setAccessToken(token);
            console.log(userDetails);
            setUser(userDetails);
        } catch (error) {
            console.error("Failed to set access token in login: ", error);
        }
    }

    const logout = () => {
        TokenManager.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


