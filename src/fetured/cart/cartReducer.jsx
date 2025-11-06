export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "REMOVE":
            const updatedState = state.filter((data)=>data.id !== action.payload)
            return [...updatedState]

        case "Update":
        default:
            return state
    }
}