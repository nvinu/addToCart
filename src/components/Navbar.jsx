import { Link } from "react-router-dom"
import { useCartContext } from "../reducerAndcontext/CartContext"

const Navbar =()=>{
  const {Products}=  useCartContext()
    return(
        <nav>
            <ul className="flex justify-around m-2 text-lg ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart <sup>{Products.length}</sup></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar