import React from 'react'
import './cardInfo.css';

function ItemCardAdmin({item,setEditId,setShowEditForm}) {

   
    const encodedUrl = encodeURI(item.imageUrl); // la imagen no se ve sino XD

    const editHandler = () => {
        setEditId(item.id)
        setShowEditForm(true)
    }
    
    return (
      <div
      className="card-border col-3 bg-dark text-white m-2 d-flex mb-5 p-0 flex-column"
      style={{
          height: "19rem",
          width: "30rem",
          backgroundImage: `url(${encodedUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}
  >
      <div className='w-100 h-50 d-flex justify-content-between'>
      <button className='border-0 text-white fw-bold py-3 px-4' style={{ fontSize: "1.5rem", backgroundColor: "#CAB4FF", height:"fit-content",width:"fit-content",borderBottomRightRadius:"4px"}} onClick={editHandler}>EDITAR</button>
          <span className='p-3 display-6 fst-italic fw-bolder' style={{ backgroundColor: "#FFC091", height: "fit-content", borderBottomLeftRadius: "20px" }}>{item.name}</span>
      </div>
      <div className='w-100 h-50 d-flex justify-content-end card-hover-content'> {/* Agrega la clase card-hover-content aquí */}
          <span className='p-1 fst-italic fw-bolder w-100 h-100 d-flex flex-column' style={{ backgroundColor: "black", height: "fit-content",opacity:0.8,fontSize:"1.7rem",textAlign:"center",justifyContent:"center",alignItems:"center",alignContent:"center" }}>
            <span className='w-100 h-100' style={{textAlign:"center",justifyContent:"center",alignItems:"center",alignContent:"center" }}>{item.desc}</span>
            </span>
      </div>
      
  </div>
              
      )
}

export default ItemCardAdmin
