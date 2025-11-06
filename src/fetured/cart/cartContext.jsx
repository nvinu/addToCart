import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(CartReducer, [])


    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}


export const useCartContext = () => {
    return useContext(CartContext)
}