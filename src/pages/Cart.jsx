import { Products } from "../components/Products"
import { useCartContext } from "../fetured/cart/cartContext"

export const Cart = () => {
    const { state } = useCartContext()

    const totalItems = state.reduce((acc, cur) => {
        return acc + cur.stock
    }, 0)

    const totalAmount = state.reduce((acc, cur) => {
        return acc + cur.stock * cur.price
    }, 0)



    return (
        <>
            <div className="flex gap-1  justify-evenly my-4 mx-[10%]">
                <div>
                    <Products item={state} incart={true} />
                </div>
                <div className="border rounded-2xl p-2 w-[25%] mt-3">
                    <h1 className="text-center text-3xl underline underline-offset-5 mb-4 font-bold">Summary</h1>
                    <h2 className="flex justify-between items-center mx-4 text-[1.5rem] mb-4"><span>Total Items:</span><span>{totalItems}</span></h2>
                    <h2 className="flex justify-between items-center mx-4 text-[1.5rem] mb-4"><span>Subtotal:</span><span>{totalAmount.toFixed(2)}</span></h2>
                    <hr className="mx-4 h-0.5  bg-white" />
                    <h2 className="flex justify-between items-center mx-4 text-[1.5rem] mb-4 font-semibold"> <span>Total Amuont:</span><span>{totalAmount.toFixed(2)}</span></h2>
                    <div className="text-end mr-4 font-bold">
                        <button className="px-4 py-2 border rounded-2xl text-end hover:text-black hover:bg-white" >CheckOut</button>
                    </div>
                </div>
            </div >

        </>

    )
}