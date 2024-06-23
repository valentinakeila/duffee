import React from 'react';
import MenuCard from './MenuCard';
function MenuList({menuCategories}) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-5 mt-5" style={{ height: "fit-content",width:"100%",gap:"5%" }}>
      <div className="row mb-3 w-100 justify-content-center mt-5" style={{gap:"5%"}}>
        {menuCategories.map((category) => (
            <MenuCard category={category}/>
            
        ))}
      </div>
    </div>
  );
}

export default MenuList;