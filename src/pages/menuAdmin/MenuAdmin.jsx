import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import React, { useState, useEffect } from 'react'
import MenuListAdmin from './MenuListAdmin';
import AddCategory from './AddCategory';
import AddCategoryForm from './AddCategoryForm';
import EditForm from './EditForm';

function MenuAdmin() {

  const [showCreateForm,setShowCreateForm] = useState(false)
  const [showEditForm,setShowEditForm] = useState(false)

  const [editId, setEditId] = useState("");

  const [menuCategories, setMenuCategories] = useState([]);

  const GetAllCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/categories", {
        headers: {
          accept: "application/json",
        },
      });
      const data = await response.json();
      setMenuCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllCategories();
  }, []);

  return (
    <>
        <Navigation/>
        <AddCategory setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>

        {showCreateForm === true ? (<AddCategoryForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} GetAllCategories={GetAllCategories} showCreateForm={showCreateForm} setShowCreateForm={setShowCreateForm}/>) : ("")}

        {showEditForm === true ? (<EditForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm}  editId={editId} setEditId={setEditId} GetAllCategories={GetAllCategories} />) : ("")}

        <MenuListAdmin menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId}/>
        <Footer/>
    </>
  )
}

export default MenuAdmin
