import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useCartContext } from "../fetured/cart/cartContext"

export const Navbar = () => {
    const {state}= useCartContext()
        
    return (
        <div className="flex justify-around bg-violet-600 text-white p-4 text-[1rem] font-bold items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"} className="flex gap-2 text-[1.2rem]"><FaCartShopping/><sup className="bg-red-400 flex justify-center items-center p-3 rounded-full w-4 h-4">{state.length}</sup></Link>

        </div>
    )
}   