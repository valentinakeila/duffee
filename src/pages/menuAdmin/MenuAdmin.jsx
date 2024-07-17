import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navbar/Navbar';
import React, { useState, useEffect, useContext } from 'react'
import MenuListAdmin from './MenuListAdmin';
import AddCategory from './AddCategory';
import AddCategoryForm from './AddCategoryForm';
import EditForm from './EditForm';
import NavBarAdmin from '../../components/navbar/NavBarAdmin';
import NavBarSysAdmin from '../../components/navbar/NavBarSysAdmin';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

function MenuAdmin() {
   const { currentUser } = useContext(AuthenticationContext);
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
  useEffect(() => {
    console.log("Current User:", currentUser);
  }, [currentUser]);
  useEffect(() => {
    console.log("Current User:", currentUser);
    console.log("Is SysAdmin:", currentUser?.isSysAdmin);
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
        <AddCategory setShowCreateForm={setShowCreateForm} showEditForm={showEditForm}/>

        {showCreateForm === true ? (<AddCategoryForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} GetAllCategories={GetAllCategories} showCreateForm={showCreateForm} setShowCreateForm={setShowCreateForm}/>) : ("")}

        {showEditForm === true ? (<EditForm menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm}  editId={editId} setEditId={setEditId} GetAllCategories={GetAllCategories} />) : ("")}

        <MenuListAdmin menuCategories={menuCategories} setMenuCategories={setMenuCategories} showEditForm={showEditForm} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId}/>
        <Footer/>
    </>
  )
}

export default MenuAdmin
