import React, { useState, useEffect } from 'react';
import MenuCardAdmin from './MenuCardAdmin';
function MenuListAdmin({ menuCategories, setMenuCategories ,setShowEditForm, editId,setEditId}) {


  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-5 mt-4" style={{ height: "fit-content",width:"100%",gap:"5%" }}>
      <div className="row mb-3 w-100 justify-content-center " style={{gap:"5%"}}>
        {menuCategories.map((category) => (
            <MenuCardAdmin key={category.id} category={category} setShowEditForm={setShowEditForm} editId={editId} setEditId={setEditId}/>
        ))}
      </div>
    </div>
  );
}

export default MenuListAdmin;