import { useState, createContext } from "react";

export const AuthenticationContext = createContext();

//const storedUser = JSON.parse(localStorage.getItem("storedUser"));

export const AuthenticationContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    //console.log("usuario seteado al inicio:");
    //console.log(currentUser);

    const handleLogin = async (email, password) => {

        const loginCredentials = {
            "email": email,
            "password": password
        };

        await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        })
        .then((response) => {
            if (response.ok) return response.json();
            else {
                throw new Error("The response has some errors");
            }
        })
        .then((data) => {
            //console.log("usuario devuelto:");
            //console.log(data);
            const auxUser = {
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName,
                adminRole: data.status,
                accessToken: data.accessToken
            };
            setCurrentUser(auxUser);
            localStorage.setItem("storedUser", JSON.stringify(auxUser));
        })
        .catch((error) => {
            console.log(error);
            localStorage.removeItem("storedUser");
            setCurrentUser(null);
        })

        const auxUser = JSON.parse(localStorage.getItem("storedUser"));
        //console.log("usuario almacenado");
        //console.log(auxUser);

        return auxUser;
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