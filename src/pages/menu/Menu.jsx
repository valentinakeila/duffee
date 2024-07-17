import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import MenuList from './MenuList';
import NavBarUser from '../../components/navbar/NavBarUser';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';
import React, { useContext } from 'react';

function Menu({ menuCategories }) {
  const { currentUser } = useContext(AuthenticationContext);
  

  let navBarComponent;
  if (!currentUser) {
    navBarComponent = <Navigation />;
  } else if (currentUser.isSysAdmin) {
    navBarComponent = <NavBarSysAdmin />;
  } else if (currentUser.adminRole) {
    navBarComponent = <NavBarAdmin />;
  } else {
    navBarComponent = <NavBarUser />;
  }
  return (
    <>
      {navBarComponent}
        <MenuList/>
        <Footer/> 
    </>
  )
}

export default Menu
