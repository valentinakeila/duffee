import React from 'react'
import "./cardBorder.css"
import { useNavigate } from 'react-router-dom';

function MenuCard({category}) {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/menu/${category.id}`, {
      state: {
        category: {
          categoryName: category.name,
          categoryId: category.id
        }
      }
    });
  };


  return (
    <div onClick={clickHandler} className="card-border col-3 bg-dark text-white m-2 d-flex justify-content-end mb-5 p-0"
            style={{
              height: "19rem", // Para hacer responsive cambiar esto :)
              width: "30rem",   // Para hacer responsive cambiar esto :)
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <span className='p-3 display-6 fst-italic fw-bolder' style={{backgroundColor:"#FFC091",height: "fit-content",borderBottomLeftRadius:"20px"}}>{category.name}</span>
          </div>
  )
}

export default MenuCard
