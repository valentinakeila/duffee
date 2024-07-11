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
    navigate(`/admin/menu/${category.id}`, {
      state: {
        category: {
          name: category.name,
          items: category.items
        }
      }
    });
  };

  return (
    <div onClick={clickHandler} className="card-border col-3 bg-dark text-white m-2 d-flex mb-5 justify-content-between p-0"
            style={{
              height: "19rem", // Para hacer responsive cambiar esto :)
              width: "30rem",   // Para hacer responsive cambiar esto :)
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <button className='border-0 text-white fw-bold py-3 px-4' style={{ fontSize: "1.5rem", backgroundColor: "#CAB4FF", height:"fit-content",width:"fit-content",borderBottomRightRadius:"4px"}} onClick={editHandler} >EDITAR</button>
            <span className='p-3 display-6 fst-italic fw-bolder' style={{backgroundColor:"#FFC091",height: "fit-content",borderBottomLeftRadius:"20px"}}>{category.name}</span>
            
          </div>
  )
}

export default MenuCardAdmin
