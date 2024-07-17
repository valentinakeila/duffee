import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import React, { useState, useEffect, useContext } from 'react'
import NavBarAdmin from '../../components/navbar/NavBarAdmin';
import NavBarSysAdmin from '../../components/navbar/NavBarSysAdmin';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';
import Users from './Users';

function UserPage() {
    const { currentUser } = useContext(AuthenticationContext);

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
        <Users/>
        <Footer/>
    </>
  )
}

export default UserPage;
