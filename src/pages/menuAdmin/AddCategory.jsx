import React, { useState } from 'react'

function AddCategory({setShowCreateForm}) {

  const handleClick = () => {
    setShowCreateForm(true)
  }

  return (
    <div className='w-100 d-flex justify-content-end px-5'>   
        <button className='mt-5 display-6 text-white rounded py-2 fw-bold' style={{backgroundColor:"#54D496",border:"none"}} onClick={handleClick}><span className='p-1'>+ NUEVA CATEGORIA</span></button>
    </div>
    
  )
}

export default AddCategory
