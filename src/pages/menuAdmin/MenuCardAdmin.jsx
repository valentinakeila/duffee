import React from 'react'
import "./cardBorder.css"
import { useNavigate } from 'react-router-dom';

function MenuCardAdmin({category,setShowEditForm,editId,setEditId}) {

  const editHandler = () => {
    setEditId(category.id)
    setShowEditForm(true)
  }

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/menu/${category.id}`, {
      state: {
        category: {
          name: category.name,
          items: category.items
        }
      }
    });
  };

  return (
    <div onClick={clickHandler} className="card-border col-3 bg-dark text-white m-2 d-flex flex-column mb-5 align-items-end justify-content-between"
            style={{
              height: "19rem", // Para hacer responsive cambiar esto :)
              width: "30rem",   // Para hacer responsive cambiar esto :)
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <span className='p-3 display-6 fst-italic fw-bolder rounded' style={{backgroundColor:"#FFC091",height: "fit-content", width:"fit-content"}}>{category.name}</span>
            <button className='border-0 text-white rounded fw-bold py-3 px-4' style={{ fontSize: "1.5rem", backgroundColor: "#CAB4FF", height:"fit-content",width:"fit-content"}} onClick={editHandler} >EDITAR</button>
          </div>
  )
}

export default MenuCardAdmin
