export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "REMOVE":
            const updatedState = state.filter((data) => data.id !== action.payload)
            return [...updatedState]

        case "UPDATE":
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, stock: action.payload.stock }
                }
                return product
            })
        default:
            return state
    }
}