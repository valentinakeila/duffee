import React, { useState, useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

function EditItemForm({ setShowEditForm, categoryId, editId, setItems, GetAllItems }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { currentUser } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:8000/items/${editId}`, {
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${currentUser.accessToken}`
          },
        });
        const data = await response.json();
        setName(data.name);
        setDesc(data.desc);
        setPrice(data.price);
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error('Error al obtener el ítem:', error);
      }
    };

    fetchItem();
  }, [editId, currentUser.accessToken]);

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
    setShowEditForm(false);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();

    if (window.confirm('¿Estás seguro de borrar este ítem?')) {
      try {
        const response = await fetch(`http://localhost:8000/items/${editId}`, {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${currentUser.accessToken}`
          },
        });

        if (response.ok) {
          setShowEditForm(false);
          GetAllItems(); // Actualiza la lista de ítems después de borrar
        } else {
          console.error('Error al borrar el ítem');
        }
      } catch (error) {
        console.error('Error al borrar el ítem:', error);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedItem = {
      name,
      desc,
      price: parseFloat(price),
      imageUrl,
      quantity: 1,
      categorieId: categoryId,
    };

    try {
      const response = await fetch(`http://localhost:8000/items/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          authorization: `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        setShowEditForm(false);
        GetAllItems(); // Actualiza la lista de ítems después de editar
      } else {
        console.error('Error al actualizar el ítem');
      }
    } catch (error) {
      console.error('Error al actualizar el ítem:', error);
    }
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        height: '79vh',
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className='rounded d-flex justify-content-center align-items-center' style={{ width: '26%', height: '60%', backgroundColor: '#CAB4FF' }}>
        <form className='rounded' style={{ width: '94%', height: '94%', backgroundColor: 'white' }} onSubmit={submitHandler}>
          <div className='d-flex justify-content-end' style={{ width: '100%', height: '22%' }}>
            <span className='p-3 display-6 fst-italic fw-bolder text-white' style={{ backgroundColor: '#CAB4FF', height: 'fit-content', borderBottomLeftRadius: '4px' }}>EDITAR</span>
          </div>

          <div className='p-3 d-flex flex-column gap-3' style={{ width: '100%', height: '60%' }}>
            <input className='border' type='text' value={name} style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }} placeholder='ITEM' onChange={nameHandler} />
            <input className='border' type='text' value={desc} style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }} placeholder='DESCRIPCION' onChange={descHandler} />
            <input className='border' type='text' value={price} style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }} placeholder='PRECIO' onChange={priceHandler} />
            <input className='border' type='text' value={imageUrl} style={{ width: '100%', height: '20%', color: '#FFB4EC', padding: '8px', fontSize: '1.2rem', letterSpacing: '0.5px', fontWeight: '100' }} placeholder='URL IMAGEN' onChange={imageHandler} />
          </div>

          <div className='d-flex p-2 gap-4 justify-content-between' style={{ width: '100%', height: '15%' }}>
            <div className='d-flex w-50 h-100'>
              <button className='border-0 text-white rounded fw-bolder' style={{ fontSize: '1.4rem', backgroundColor: '#FF7474' }} onClick={deleteHandler}>BORRAR</button>
            </div>
            <div className='d-flex w-50 h-100 justify-content-end gap-2'>
              <button className='border-0 text-white rounded fw-bolder' style={{ fontSize: '1.4rem', backgroundColor: '#FF7474' }} onClick={cancelHandler}>CANCELAR</button>
              <button type='submit' className='border-0 text-white rounded fw-bolder' style={{ fontSize: '1.4rem', backgroundColor: '#54D496' }}>HECHO</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItemForm;
