import { useEffect, useState } from "react"
import { Filter } from "../components/Filter"
import { Products } from "../components/Products"

export const Home = () => {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])

    let  dummydata =localStorage.getItem("dummyData")
    let  orginalData =localStorage.getItem("originalData")

    useEffect(() => {
        if (dummydata) {
            setData(JSON.parse(dummydata))
            setOriginalData(JSON.parse(orginalData))
        }
        else {

            fetch("https://dummyjson.com/carts").then((data) => data.json()).then((data) => {
                const alldata = data.carts?.flatMap((data) => data.products)
                setData(alldata)
                setOriginalData(alldata)
                localStorage.setItem("dummyData",JSON.stringify(alldata))
            })
        }

    }, [])


    return (
        <>
            <div className="flex justify-end text font-bold ">
                <Filter data={data} setData={setData} originalData={originalData} />
            </div>
            <Products item={data} incart={false} />
        </>

    )
}