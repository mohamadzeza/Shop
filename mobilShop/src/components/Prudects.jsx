import { useState } from 'react'
import Prudect from './Prudect'
import { Link } from 'react-router-dom'


function Prudects({titel , detext , price}) {

  return (
    <div className='flex-main-ps'>
   <Link to={"/buy"} > <Prudect
    imges={"./public/t-shirt.jpg"}
    titel={"Black T-Shirt"}
    detext={"Description"}
    price={"250.00"}
    /></Link>
    <Prudect
    imges={"./public/shoes.jpg"}
    titel={"Black Shoes"}
    detext={"Description"}
    price={"115.00"}
    />
    <Prudect
    imges={"./public/shoes.jpg"}
    titel={"Black Shoes"}
    detext={"Description"}
    price={"125.00"}
    />
    </div>
    
  )
}

export default Prudects
