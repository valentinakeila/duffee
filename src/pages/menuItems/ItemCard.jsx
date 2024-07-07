import React from 'react'

function ItemCard({item}) {

    const clickHandler = () => {
        //agregar al carrito
    }
    const encodedUrl = encodeURI(item.imageUrl); // la imagen no se ve sino XD

    return (
        <div onClick={clickHandler} className="card-border col-3 bg-dark text-white m-2 d-flex justify-content-end mb-5"
                style={{
                  height: "19rem",
                  width: "30rem",   
                  backgroundImage: `url(${encodedUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                <span className='p-3 display-6 fst-italic fw-bolder rounded' style={{backgroundColor:"#FFC091",height: "fit-content"}}>{item.name}</span>
              </div>
              
      )
}

export default ItemCard
