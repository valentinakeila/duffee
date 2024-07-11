import React, { useState, useEffect } from 'react';
import MenuCard from './MenuCard';

function MenuList() {
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
    <div
      className="d-flex flex-column align-items-center justify-content-center mb-5 mt-5"
      style={{ height: "fit-content", width: "100%", gap: "5%" }}
    >
      <div className="row mb-3 w-100 justify-content-center mt-5" style={{ gap: "5%" }}>
        {menuCategories.map((category) => (
          <MenuCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
