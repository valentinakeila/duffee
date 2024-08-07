import React, { useState, useEffect } from 'react';
import ItemCardAdmin from './ItemCardAdmin'

function ItemListAdmin({ items,setEditId,showEditForm,setShowEditForm,categoryName }) {
 

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-5 mt-1" style={{ height: "fit-content",width:"100%",gap:"5%" }}>
        <div className='w-100 d-flex' style={{height:"5%",}}>
            <div style={{width:"41%",borderBottom:"3px solid #dd8541",marginBottom:"1.4rem"}}></div>
            <span className='text-center display-5 font-italic' style={{width:"18%",color:"#dd8541", fontStyle: "italic", fontWeight:"normal"}}>{categoryName}</span>
            <div style={{width:"41%",borderBottom:"3px solid #dd8541",marginBottom:"1.4rem"}}></div>
        </div>

        {items.length > 0 ? (<div className="row mb-3 w-100 justify-content-center mt-5" style={{gap:"5%"}}>
        {items.map((item) => (
            <ItemCardAdmin item={item} key={item.id} setEditId={setEditId} setShowEditForm={setShowEditForm}/>
        ))}
      </div>) : ( <span className='text-center mt-5 display-4 font-italic' style={{width:"100%",color:"#dd8541", fontStyle: "italic", fontWeight:"normal"}}>No hay items en esta categoria</span>)}
      
    </div>
  )
}

export default ItemListAdmin
