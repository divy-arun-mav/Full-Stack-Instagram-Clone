import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("jwt"));
    const [user, setUser] = useState("");
    let isLoggedIn = !!token;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("jwt", serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("jwt")
    }

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                if (data.msg) {
                    setUser(data.msg);
                } else {
                    console.error("Unexpected API response format:", data);
                }
            } else {
                console.error("Server returned an error:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error during user authentication:", error);
        }
    };


    useEffect(() => {
        userAuthentication();
    }, [])


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, token}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};