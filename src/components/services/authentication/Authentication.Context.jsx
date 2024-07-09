import { useState, createContext, Children } from "react";

export const AuthenticationContext = createContext();

const storedUser = JSON.parse(localStorage.getItem("storedUser"));

export const AuthenticationContextProvider = ({ children }) => {

    const initialUsers = [
        {
          id: 1,
          name: "Manuel Cecarelli",
          email: "manuelcecarelli@gmail.com",
          password: "manu123",
          adminRole: true
        },
        {
          id: 2,
          name: "Nicolas Cataldi",
          email: "nicolascataldi@gmail.com",
          password: "nico123",
          adminRole: false
        },
        {
          id: 3,
          name: "Valentina Garrido",
          email: "valentinagarrido@gmail.com",
          password: "valen123",
          adminRole: false
        }
    ]
    const [usersStored, setUsersArray] = useState(initialUsers);
    const [currentUser, setCurrentUser] = useState(storedUser);

    //Esta lógica es momentánea, hay que sacarla cuando se utilice el login de la fake-api.
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = (email, password) => {
        const auxUser = usersStored.find(user => user.email == email);

        if (auxUser) {
            console.log("Usuario encontrado!")
            if (auxUser.password == password) {
                console.log("Contraseña correcta!")
                setCurrentUser(auxUser);
                localStorage.setItem("storedUser", JSON.stringify({ auxUser }));
                console.log("Datos del usuario:")
                console.log(auxUser);
                return true;
            } else {
                console.log("Contraseña incorrecta!");
                return false;
            }
        } else {
            console.log("Usuario incorrecto!")
            return false;
        }
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