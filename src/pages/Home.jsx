import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Product } from "../components/Product"



const Home = () => {
    const [data, setdata] = useState([])
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((data) => data.json()).then((data) => {
            setdata(data)
        })

    }, [])




    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-5 mx-5  gap-3 my-12 ">

                {data.map((data) => {
                    return (
                        <Product key={data.id} data={data} incart={false} />
                    )
                })}
            </div>
        </div>


    )
}


export default Home