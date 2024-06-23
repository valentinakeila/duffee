import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import React, { useState } from 'react'
import MenuListAdmin from './MenuListAdmin';
import AddCategory from './AddCategory';
import AddCategoryForm from './AddCategoryForm';
import EditForm from './EditForm';

function MenuAdmin({menuCategories,setMenuCategories}) {

  const [showCreateForm,setShowCreateForm] = useState(false)
  const [showEditForm,setShowEditForm] = useState(false)

  const [editId, setEditId] = useState("");

  return (
    <>
        <Navigation/>
        <AddCategory setShowCreateForm={setShowCreateForm}/>

        {showCreateForm === true ? (<AddCategoryForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} showCreateForm={showCreateForm} setShowCreateForm={setShowCreateForm}/>) : ("")}

        {showEditForm === true ? (<EditForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm}  editId={editId} setEditId={setEditId} />) : ("")}

        <MenuListAdmin menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId}/>
        <Footer/>
    </>
  )
}

export default MenuAdmin
