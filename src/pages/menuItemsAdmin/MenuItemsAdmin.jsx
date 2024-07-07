import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ItemListAdmin from './ItemListAdmin';
import Navigation from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import AddItem from './AddItem';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

function MenuItemsAdmin() {

        const location = useLocation();
        const navigate = useNavigate();

        const { name, items} = location.state.category

        const [showCreateForm,setShowCreateForm] = useState(false)
        const [showEditForm,setShowEditForm] = useState(false)

        const [editId, setEditId] = useState()


  return (
    <div>
        <Navigation/>
        <AddItem setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>
        {showCreateForm === true ? (<AddItemForm items={items} setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>) : ("")}
        {showEditForm === true ? (<EditItemForm items={items}  showEditForm={showEditForm} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId} />) : ("")}
        <ItemListAdmin items={items} name={name} editId={editId} setEditId={setEditId} setShowCreateForm={setShowCreateForm} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/>

        

        <Footer/>
    </div>
  )
}

export default MenuItemsAdmin
