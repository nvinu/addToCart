import { useCartContext } from "../reducerAndcontext/CartContext"


export const Product = ({ data, incart }) => {
    const { AddCart ,RemoveCart} = useCartContext()

    const handleclick = () => {
        if (incart) {
            RemoveCart(data)
        } else {
            AddCart(data)
            console.log("clicked", data);
        }


    }
    return (
        <div key={data.id} className="flex flex-col border-2  border-black rounded-2xl">
            <div className="">
                <img src={data.image} alt="" className="w-full h-[250px] p-2 " />
            </div>
            <div className="flex flex-col gap-4 p-6">
                <h4 className=""><span className="font-bold">Title :</span>{data.title.length > 5 ? `${data.title.slice(0, 40)}...` : data.title}</h4>
                <p><span className="font-bold">Description:</span> {data.description.length > 5 ? `${data.description.slice(0, 40)}...` : data.description}</p>
                <h6><span className="font-bold">Price: </span>{data.price}</h6>
                <button className={`px-4 py-2  rounded-2xl ${incart ? "bg-green-400" : "bg-red-400"}`} onClick={handleclick}>{incart ? "Remove to cart" :"Add to cart"}</button>
            </div>
        </div>
    )
}