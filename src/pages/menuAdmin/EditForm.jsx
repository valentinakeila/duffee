import React, { useState, useEffect } from 'react';
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";

function EditForm({ showEditForm, setShowEditForm, menuCategories, setMenuCategories, editId }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { currentUser, handleLogin } = useContext(AuthenticationContext);


  useEffect(() => {
    const categoryToEdit = menuCategories.find(category => category.id === editId);
    if (categoryToEdit) {
      setName(categoryToEdit.name);
      setImageUrl(categoryToEdit.imageUrl);
    }
  }, [editId, menuCategories]);

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const imageHandler = (e) => {
    setImageUrl(e.target.value);
  }

  const deleteHandler = async (e) => {
    e.preventDefault();

    if (window.confirm("¿Estás seguro de que quieres borrar esta categoría?")) {
      try {
        const response = await fetch(`http://localhost:8000/categories/${editId}`, {
          method: 'DELETE',
          headers: {
            "Authorization": `Bearer ${currentUser.accessToken}`
          }
        });

        if (response.ok) {
          const filteredCategories = menuCategories.filter(category => category.id !== editId);
          setMenuCategories(filteredCategories);
          setShowEditForm(false);
        } else {
          console.error('Error al borrar la categoría:', response.statusText);
        }
      } catch (error) {
        console.error('Error al borrar la categoría:', error);
      }
    }
  }

  const cancelHandler = (e) => {
    e.preventDefault();
    setShowEditForm(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedCategory = {
      name: name,
      imageUrl: imageUrl,
    };

    try {
      const response = await fetch(`http://localhost:8000/categories/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(updatedCategory),
      });

      if (response.ok) {
        const updatedCategories = menuCategories.map(category => {
          if (category.id === editId) {
            return {
              ...category,
              name: name,
              imageUrl: imageUrl
            };
          }
          return category;
        });

        setMenuCategories(updatedCategories);
        setName('');
        setImageUrl('');
        setShowEditForm(false);
      } else {
        console.error('Error al actualizar la categoría:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center'
      style={{
        height: "80vh",
        width: "100%",
        position: 'fixed',
        zIndex: 1000,
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      }}>
      <div className='rounded d-flex justify-content-center align-items-center' style={{ width: "26%", height: "55%", backgroundColor: "#CAB4FF" }}>
        <form className='rounded' style={{ width: "94%", height: "94%", backgroundColor: "white" }}>

          <div className='d-flex justify-content-end' style={{ width: "100%", height: "22%" }}>
            <span className='p-3 display-6 fst-italic fw-bolder rounded text-white' style={{ backgroundColor: "#CAB4FF", height: "fit-content" }}>EDITAR</span>
          </div>

          <div className='p-3 d-flex flex-column gap-5' style={{ width: "100%", height: "60%" }}>
            <input className='border' type="text" value={name} style={{ width: "100%", height: "20%", color: "#CAB4FF", padding: "8px",fontSize: "1.2rem",letterSpacing:"0.5px",fontWeight:"100" }} placeholder='CATEGORIA' onChange={nameHandler} />
            <input className='border' type="text" value={imageUrl} style={{ width: "100%", height: "20%", color: "#CAB4FF", padding: "8px",fontSize: "1.2rem",letterSpacing:"0.5px",fontWeight:"100" }} placeholder='URL IMAGEN' onChange={imageHandler} />
          </div>

          <div className='d-flex p-2 gap-4 justify-content-between' style={{ width: "100%", height: "15%" }}>
          
          
          <div className='d-flex w-50 h-100  '>
          <button className='border-0 text-white rounded fw-bolder' style={{ fontSize: "1.4rem", backgroundColor: "#FF7474" }} onClick={deleteHandler}>BORRAR</button>
          </div>
          <div className='d-flex w-50 h-100 justify-content-end gap-2 '>
          <button className='border-0 text-white rounded fw-bolder' style={{ fontSize: "1.4rem", backgroundColor: "#FF7474" }} onClick={cancelHandler} >CANCELAR</button>
          <button type='submit' className='border-0 text-white rounded fw-bolder' style={{ fontSize: "1.4rem", backgroundColor: "#54D496" }} onClick={submitHandler}>HECHO</button>
          </div>
           
            
          </div>

        </form>
      </div>
    </div>
  );
}



export default EditForm
