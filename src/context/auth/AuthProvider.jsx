import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (storedUser && token) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);


    const setUserData = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setIsLoggedIn(true);
    };

    const removeUserdata = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn,
                setUserData,
                removeUserdata,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);