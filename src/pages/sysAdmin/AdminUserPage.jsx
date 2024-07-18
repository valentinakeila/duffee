import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import NavBarAdmin from '../../components/navbar/NavBarAdmin';
import NavBarSysAdmin from '../../components/navbar/NavBarSysAdmin';
import Users from './Users';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

function AdminUserPage() {
  const { currentUser } = useContext(AuthenticationContext);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users", {
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${currentUser.accessToken}`
        },
      });
      const data = await response.json();
      setUsers(data); // Guardar los usuarios en el estado local
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    if (currentUser.isSysAdmin) {
      getAllUsers();
    }
  }, [currentUser]);

  let navBarComponent;
  if (currentUser === null) {
    navBarComponent = <Navigation />;
  } else if (currentUser.isSysAdmin) {
    navBarComponent = <NavBarSysAdmin />;
  } else if (currentUser.adminRole) {
    navBarComponent = <NavBarAdmin />;
  }

  return (
    <>
      {navBarComponent}
      <Users users={users} setUsers={setUsers} getAllUsers={getAllUsers} />
      <Footer />
    </>
  );
}

export default AdminUserPage;
