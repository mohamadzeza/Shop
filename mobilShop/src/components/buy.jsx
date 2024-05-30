import { useState, useEffect, useRef } from "react";
function buy(){
    let redcolor = document.getElementsByClassName('red')
    function red(){
      redcolor.current.style.backgruond = "blue"
    }
 return(
    <>
    <div>
        <div className="buy-backgruond">
          <img src="./public/t-shirt.jpg" alt="" />
        </div>
        <div>
            <div className="titel-buy">
                <div>
                <h2 className="price">$125.00</h2>
                <h3 className="titel">T-shirt</h3>
                </div>
                <div className="star">
                    <div className="stars">
                    <img src="./public/icons8-star-10.png" alt="" />
                    <img src="./public/icons8-star-10.png" alt="" />
                    <img src="./public/icons8-star-10.png" alt="" />
                    <img src="./public/icons8-star-10.png" alt="" />
                    <img src="./public/icons8-star-100.png" alt="" />
                    </div>
                    <h3>color ouption :</h3>
                    <div className="color">
                    <div className="red" onClick={red}></div>
                    <div className="blue"></div>
                    <div className="black"></div>
                    </div>
                </div>
            </div>
            <button></button>

        </div>
    </div>
    </>
 )
}
export default buy