import React, { useState,useEffect } from 'react';
import { AuthenticationContext } from "../../components/services/authentication/UserAuthenticationContext";
import { useContext } from "react";

function AddItemForm({ categoryId, setShowCreateForm,GetAllItems }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { currentUser, handleLogin } = useContext(AuthenticationContext);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const imageHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const cancelHandler = () => {
    setShowCreateForm(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const newItem = {
      name,
      desc,
      price: parseFloat(price),
      imageUrl,
      categorieId: categoryId,
    };
  
    try {
      const response = await fetch('http://localhost:8000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          "authorization": `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(newItem),
      });
      if (response.ok) {
        // Resetea el formulario y cierra el modal si la solicitud es exitosa
        setName('');
        setDesc('');
        setPrice('');
        setImageUrl('');
        setShowCreateForm(false);
  
        // Actualiza la lista de items correctamente
        GetAllItems();
      } else {
        console.error('Error al crear el ítem');
      }
    } catch (error) {
      console.error('Error al crear el ítem:', error);
    }
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        height: '80vh',
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className='rounded d-flex justify-content-center align-items-center' style={{ width: '26%', height: '55%', backgroundColor: '#FFB4EC' }}>
        <form className='rounded' style={{ width: '94%', height: '94%', backgroundColor: 'white' }} onSubmit={submitHandler}>

          <div className='d-flex justify-content-end' style={{ width: '100%', height: '22%' }}>
            <span className='p-3 display-6 fst-italic fw-bolder rounded text-white' style={{ backgroundColor: '#FFB4EC', height: 'fit-content' }}>CREAR</span>
          </div>

          <div className='p-3 d-flex flex-column gap-3' style={{ width: '100%', height: '60%' }}>
            <input
              className='border'
              type='text'
              value={name}
              style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }}
              placeholder='ITEM'
              onChange={nameHandler}
            />
            <input
              className='border'
              type='text'
              value={desc}
              style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }}
              placeholder='DESCRIPCION'
              onChange={descHandler}
            />
            <input
              className='border'
              type='text'
              value={price}
              style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }}
              placeholder='PRECIO'
              onChange={priceHandler}
            />
            <input
              className='border'
              type='text'
              value={imageUrl}
              style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }}
              placeholder='URL IMAGEN'
              onChange={imageHandler}
            />
          </div>

          <div className='d-flex justify-content-end p-2 gap-4' style={{ width: '100%', height: '15%' }}>
            <button
              className='border-0 text-white rounded fw-bolder'
              style={{ fontSize: '1.4rem', backgroundColor: '#FF7474' }}
              onClick={cancelHandler}
            >
              CANCELAR
            </button>
            <button
              type='submit'
              className='border-0 text-white rounded fw-bolder'
              style={{ fontSize: '1.4rem', backgroundColor: '#54D496' }}
            >
              HECHO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
