import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        user: { username: '' }, // Assicurati che questo sia inizializzato correttamente
    });

    const login = (token, user) => {
        setAuthState({ token, user });
    };

    const logout = () => {
        setAuthState({ token: null, user: { username: '' } });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizzato per usare il contesto Auth
export const useAuthContext = () => {
    return useContext(AuthContext);
};