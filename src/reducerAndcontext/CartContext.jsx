import { createContext, useContext, useReducer } from "react";
import { cartReducer, InitialState } from "./cartreducer";

export const CartContext = createContext()


export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, InitialState)
    console.log(state);
    

    const AddCart = (product) => {
        const updatedState = [...state.Products,product]
        dispatch({ type: "Add", payload: updatedState })
        UpdateCart(updatedState)
    }

    const RemoveCart = (removeproduct) => {
        const updatedState = state.Products.filter((product) => {
        return product.id !== removeproduct.id
        })
        dispatch({ type: "Remove", payload: updatedState })
        UpdateCart(updatedState)
    }

    const UpdateCart = (cartProducts) => {
        let total = 0
        cartProducts.forEach((data) => {
            total += data.price
        })

        dispatch({ type: "UpdatePrice", payload: total })
    }

    const data = { AddCart, RemoveCart, Products:state.Products, Price:state.Price }


    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}


export const useCartContext = () => {
    return useContext(CartContext)
}