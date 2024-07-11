import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function ItemList({ categoryName, categoryId }) {
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
      console.log(items)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllItems();
  }, [categoryId]); // Dependencia en categoryId para volver a cargar si cambia

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center mb-5 mt-5"
      style={{ height: 'fit-content', width: '100%', gap: '5%' }}
    >
      <div className='w-100 d-flex' style={{ height: '5%' }}>
        <div style={{ width: '41%', borderBottom: '3px solid #dd8541', marginBottom: '1.4rem' }}></div>
        <span className='text-center mt-5 display-5 font-italic' style={{ width: '18%', color: '#dd8541', fontStyle: 'italic', fontWeight: 'normal' }}>
          {categoryName}
        </span>
        <div style={{ width: '41%', borderBottom: '3px solid #dd8541', marginBottom: '1.4rem' }}></div>
      </div>
      {items.length > 0 ? (
        <div className="row mb-3 w-100 justify-content-center mt-5" style={{ gap: '5%' }}>
          {items.map(item => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className='text-center mt-5 display-4 font-italic' style={{ width: '100%', color: '#dd8541', fontStyle: 'italic', fontWeight: 'normal' }}>
          No hay items en esta categoria
        </span>
      )}
    </div>
  );
}

export default ItemList;
