import { useState } from 'react'


function cart({imges , titel , de, price}) {

  return (
    <>
      <div className='main-color-cart'>
            <img className='img-cart' src={imges} alt="" />
                <div>
                    <h2>{titel}</h2>
                    <h3>{de}</h3>
                    <p>${price}</p>
                </div>
      </div>
    </>
  )
}

export default cart
