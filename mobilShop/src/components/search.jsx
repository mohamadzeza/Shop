import { Link } from "react-router-dom"

function search(){
  return(
    <div className="main-search">
     <img className="img-search" src="./public/icons8-search-100.png" alt="" />
    <input className="search-input" type="search" placeholder="search" />
    <Link to={"Buy"}><img className="img-buy" src="./public/icons8-buy.gif" alt="" /></Link>
    </div>
  )
}
export default search