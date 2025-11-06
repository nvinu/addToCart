export const Filter = ({ data, setData ,originalData}) => {

    const handleFilter = (e) => {

        switch (e.target.value) {
            case "Name":
                const sortByName = [...data].sort((a, b) => a.title.localeCompare(b.title))
                setData(sortByName)
                break;
            case "Price":
                const sortByPrice = [...data].sort((a, b) => a.price-b.price)
                setData(sortByPrice)
                break;
        }

    }

    const handleClearfilter = ()=>{
        setData(originalData)
    }
    return (
        <>
            <div className="shadow-lg py-2 px-4 my-5 shadow-black rounded-3xl flex gap-2  items-center mr-[5%]">
                <span>Filter By :</span>
                <select name="" id="" className="bg-blue-400 rounded-2xl p-2 outline-0 w-[100px]" defaultValue="" onChange={handleFilter}>
                    <option value="" disabled> Category  </option>
                    <option value="Name">Name  </option>
                    <option value="Price">Price  </option>
                </select>
                <button className="p-2 bg-red-500 rounded-2xl" onClick={handleClearfilter}>clear Filter</button>
            </div>
        </>
    )
}