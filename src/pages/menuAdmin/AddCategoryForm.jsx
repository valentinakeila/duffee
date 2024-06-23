import React, { useState } from 'react';

function AddCategoryForm({ showCreateForm, setShowCreateForm, menuCategories, setMenuCategories }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const imageHandler = (e) => {
    setImageUrl(e.target.value);
  }

  const [newCategory, setNewCategory] = useState({})

  const cancelHandler = () => {
    setShowCreateForm(false)
  }


  const submitHandler = (e) => {
    e.preventDefault();
  
    const newCategory = {
      name: name,
      imageUrl: imageUrl,
      id: Math.random().toString(36).substr(2, 9)
    };
  
    // Actualizar el estado de newCategory directamente
    setNewCategory(newCategory);
  
    // Agregar la nueva categoría a menuCategories usando una función de callback
    setMenuCategories(prevCategories => [...prevCategories, newCategory]);
  
    setImageUrl("");
    setName("");
    setNewCategory({});
    setShowCreateForm(false)
  };
  

  

  return (
    <div className='d-flex justify-content-center align-items-center'
      style={{
        height: "80vh",
        width: "100%",
        position: "absolute",
        zIndex: 1000,
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      }}>
      <div className='rounded d-flex justify-content-center align-items-center' style={{ width: "26%", height: "55%", backgroundColor: "#FFB4EC" }}>
        <form className='rounded' style={{ width: "94%", height: "94%", backgroundColor: "white" }}>

          <div className='d-flex justify-content-end' style={{ width: "100%", height: "22%" }}>
            <span className='p-3 display-6 fst-italic fw-bolder rounded text-white' style={{ backgroundColor: "#FFB4EC", height: "fit-content" }}>CREAR</span>
          </div>

          <div className='p-3 d-flex flex-column gap-5' style={{ width: "100%", height: "60%" }}>
            <input className='border' type="text" value={name} style={{ width: "100%", height: "20%", color: "#FFB4EC", padding: "8px",fontSize: "1.2rem",letterSpacing:"0.5px",fontWeight:"100" }} placeholder='CATEGORIA' onChange={nameHandler} />
            <input className='border' type="text" value={imageUrl} style={{ width: "100%", height: "20%", color: "#FFB4EC", padding: "8px",fontSize: "1.2rem",letterSpacing:"0.5px",fontWeight:"100" }} placeholder='URL IMAGEN' onChange={imageHandler} />
          </div>

          <div className='d-flex justify-content-end p-2 gap-4' style={{ width: "100%", height: "15%" }}>
            <button className='border-0 text-white rounded fw-bolder' style={{ fontSize: "1.4rem", backgroundColor: "#FF7474" }} onClick={cancelHandler} >CANCELAR</button>
            <button type='submit' className='border-0 text-white rounded fw-bolder' style={{ fontSize: "1.4rem", backgroundColor: "#54D496" }} onClick={submitHandler}>HECHO</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
