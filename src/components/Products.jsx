import { useCartContext } from "../fetured/cart/cartContext"

export const Products = ({ item, incart }) => {


    const { state, dispatch } = useCartContext()
    const handleCart = (product) => {
        if (incart) {
            dispatch({ type: "REMOVE", payload: product.id })
        } else {
            dispatch({ type: "ADD", payload: { ...product, stock: 1 } })
        }
    }

    const handleIncreaseStock = (product) => {
        if (product.stock < product.quantity) {
            const updatedProduct = { ...product, stock: product.stock + 1 }
            return dispatch({ type: "UPDATE", payload: updatedProduct })
        } else {
            return product.stock
        }

    }

    const handleDecreaseStock = (product) => {
        if (product.stock < product.quantity && product.stock >= 1) {
            const updatedProduct = { ...product, stock: product.stock - 1 }
            return dispatch({ type: "UPDATE", payload: updatedProduct })
        } else {
            return product.stock
        }

    }



    if (item && (incart == true)) {
        return (
            <>
                <div className="flex flex-col gap-4">
                    {item?.map((data, index) => {

                        const { title, price, thumbnail } = data
                        return (
                            <div key={index} className="grid grid-cols-3 w-[50vw] justify-center  items-center gap-4  border rounded-2xl">
                                <div className="h-[200px] w-[200px] object-fill flex justify-center items-center ">
                                    <img src={thumbnail} alt="" className="" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <div><span className="font-bold">Title</span>:{title} </div>
                                    <div><span className="font-bold">Price</span>:${price} </div>
                                    <div className="font-bold"><button className="p-1 w-8 bg-red-500 rounded-full mr-2" onClick={() => handleDecreaseStock(data)}>-</button><span >{data.stock}</span><button onClick={() => handleIncreaseStock(data)} className="ml-2 p-1 w-8 bg-red-500 rounded-full">+</button></div>
                                </div>
                                <div className="text-center">
                                    <button className={` border rounded-md px-2 py-1   ${incart ? "bg-red-500" : "bg-blue-500"}`} onClick={() => handleCart(data)}>{incart ? "Remove to cart" : "Add to cart"}</button>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }


    return (
        <>
            {item && (incart == false) && <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-start mt-2 gap-4 mx-4">
                {item?.map((data, index) => {
                    const { title, price, thumbnail } = data
                    return (
                        <div key={index} className="lg:relative  flex flex-col justify-center lg:items-center  gap-1  border rounded-2xl w-full overflow-hidden">
                            <div className="h-[200px] relative w-full">
                                <img src={thumbnail} alt="" className="object-cover sm:h-[200px] sm:w-full  absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            </div>
                            <div className=" lg:absolute inset-0  p-2 transition-opacity duration-300  lg:opacity-0 hover:opacity-50 lg:flex lg:justify-center lg:items-center flex-col gap-2  lg:bg-white lg:text-black">
                                <div><span className="font-bold">Title</span>:{title} </div>
                                <div><span className="font-bold">Price</span>:${price} </div>
                                <button className={` border rounded-md px-2 py-1  ${incart ? "bg-red-500" : "bg-blue-500"}`} onClick={() => handleCart(data)}>{incart ? "Remove to cart" : "Add to cart"}</button>

                            </div>
                        </div>
                    )
                })}
            </div>}
        </>
    )




}