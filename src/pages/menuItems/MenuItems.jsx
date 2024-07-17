import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ItemList from './ItemList';
import Navigation from '../../components/navbar/Navbar';
import NavBarUser from '../../components/navbar/NavBarUser';
import Footer from '../../components/footer/Footer';
import { useContext } from 'react';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

function MenuItems() {

  const { currentUser } = useContext(AuthenticationContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { categoryName, categoryId} = location.state.category
  let navBarComponent;
  if (currentUser === null) {
    navBarComponent = <Navigation />;
  } else if (currentUser.isSysAdmin) {
    navBarComponent = <NavBarSysAdmin />;
  } else if (currentUser.adminRole) {
    navBarComponent = <NavBarAdmin />;
  } else{
    navBarComponent = <NavBarUser/>
  }
  return (
    <div>
       {navBarComponent}
        <ItemList categoryName={categoryName} categoryId={categoryId}/>
        <Footer/>
    </div>
  )
}

export default MenuItems
