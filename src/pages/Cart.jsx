import { Products } from "../components/Products"
import { useCartContext } from "../fetured/cart/cartContext"

export const Cart = () => {
    const { state } = useCartContext()
    console.log(state);

    return (
        <>
            <div className="flex gap-1  justify-evenly my-4 mx-[10%]">
                <div>
                    <Products item={state} incart={true} />
                </div>
                <div className="bg-red-400 w-[25%] mt-3">
                    <h1 className="text-center">Summary</h1>
                </div>
            </div >

        </>

    )
}