import { useState } from 'react'


function Prudect({titel , detext , price , imges}) {

  return (
    <>
      <div>
        <div className='main-color-prudect'>
          <div>
            <img className='img-prudect' src={imges} alt="" />
            </div>
            <div>
                <h3 className='titel'>{titel}</h3>
                <p className='de-text'>{detext}</p>
                <div className='button-price'>
                <h2 className='price'>${price}</h2>
                <button>+</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Prudect
