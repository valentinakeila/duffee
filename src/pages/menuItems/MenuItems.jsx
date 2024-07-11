import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ItemList from './ItemList';
import Navigation from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function MenuItems() {


        const location = useLocation();
        const navigate = useNavigate();

        const { categoryName, categoryId} = location.state.category


  return (
    <div>
        <Navigation/>
        <ItemList categoryName={categoryName} categoryId={categoryId}/>
        <Footer/>
    </div>
  )
}

export default MenuItems
