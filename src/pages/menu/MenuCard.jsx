import React from 'react'

function MenuCard({category}) {
  return (
    <div className="col-3 bg-dark text-white m-2 d-flex justify-content-end mb-5"
            style={{
              height: "19rem", // Para hacer responsive cambiar esto :)
              width: "30rem",   // Para hacer responsive cambiar esto :)
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <span className='p-3 display-6 fst-italic fw-bolder rounded' style={{backgroundColor:"#FFC091",height: "fit-content"}}>{category.name}</span>
          </div>
  )
}

export default MenuCard
