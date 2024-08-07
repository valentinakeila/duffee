import React, { useState,useEffect, useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ItemListAdmin from './ItemListAdmin';
import Navigation from '../../components/navbar/Navbar';
import NavBarSysAdmin from '../../components/navbar/NavBarSysAdmin';
import NavBarAdmin from '../../components/navbar/NavBarAdmin';
import Footer from '../../components/footer/Footer';
import AddItem from './AddItem';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";

function MenuItemsAdmin() {
  const { currentUser } = useContext(AuthenticationContext);
        const location = useLocation();
        const navigate = useNavigate();

        const { categoryName, categoryId} = location.state.category

        const [showCreateForm,setShowCreateForm] = useState(false)
        const [showEditForm,setShowEditForm] = useState(false)

        const [editId, setEditId] = useState()

        const [items, setItems] = useState([]);

        const GetAllItems = async () => {
          try {
            const response = await fetch('http://localhost:8000/items', {
              headers: {
                accept: 'application/json',
              },
            });
            const data = await response.json();
            const filteredItems = data.filter(item => item.categorieId === categoryId);
            setItems(filteredItems);
          } catch (error) {
            console.log(error);
          }
        };
      
        useEffect(() => {
          GetAllItems();
        }, [categoryId]);

        

        let navBarComponent;
        if (currentUser === null) {
          navBarComponent = <Navigation />;
        } else if (currentUser.isSysAdmin) {
          navBarComponent = <NavBarSysAdmin />;
        } else if (currentUser.adminRole) {
          navBarComponent = <NavBarAdmin />;
        } 
  return (
    <div>
        {navBarComponent}
        <AddItem setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>
        {showCreateForm === true ? (<AddItemForm setItems={setItems} GetAllItems={GetAllItems} categoryId={categoryId} setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>) : ("")}
        {showEditForm === true ? (<EditItemForm setItems={setItems}  GetAllItems={GetAllItems} categoryId={categoryId}  showEditForm={showEditForm} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId} />) : ("")}
        <ItemListAdmin items={items} setItems={setItems} categoryName={categoryName} editId={editId} setEditId={setEditId} setShowCreateForm={setShowCreateForm} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/>

        

        <Footer/>
    </div>
  )
}

export default MenuItemsAdmin
