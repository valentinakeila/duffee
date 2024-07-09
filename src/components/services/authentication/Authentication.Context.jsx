import { useState, createContext, Children } from "react";

export const AuthenticationContext = createContext();

const storedUser = JSON.parse(localStorage.getItem("storedUser"));

export const AuthenticationContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(storedUser);

    const handleLogin = (email) => {
        localStorage.setItem("storedUser", JSON.stringify({ email }));
        setCurrentUser({ email });
    };

    const handleLogout = () => {
        localStorage.removeItem("storedUser");
        setCurrentUser(null);
    };

    return (
        <AuthenticationContext.Provider value={{currentUser, handleLogin, handleLogout}}>
            {children}
        </AuthenticationContext.Provider>
    );
};