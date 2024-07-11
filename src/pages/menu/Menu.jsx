import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import React from 'react'
import MenuList from './MenuList';

function Menu({menuCategories}) {

  return (
    <>
        <Navigation/>
        <MenuList/>
        <Footer/>
    </>
  )
}

export default Menu
