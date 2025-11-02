import Navbar from "../components/Navbar"
import { Product } from "../components/Product"
import { useCartContext } from "../reducerAndcontext/CartContext"

const Cart = () => {
    const { Products, Price } = useCartContext()

    console.log(Products)
    console.log(Price)
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-5 mx-5  gap-3 my-12 ">
                {Products.map((data) => {
                    return <Product key={data.id} data={data} incart={true}/>
                })}
            </div>
            <div >
               <h1 className="text-[38px]">Total Price: {Price}</h1> 
            </div>
        </>
    )
}

export default Cart