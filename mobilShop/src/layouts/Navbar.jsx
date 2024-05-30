import { useState } from 'react'


function Navbar({titel , detext , price , imges}) {

  return (
    <>
      <div className='main-nav'>
        <img className='img-user'  src="./public/icons8-menu-100.png" alt="" />
        <img className='img-user' src="./public/icons8-user-96 (2).png" alt="" />
      </div>
    </>
  )
}
export default Navbar