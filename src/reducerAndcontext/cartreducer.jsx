


export const InitialState = {
    Price: 0,
    Products: []
}


export const cartReducer = (state, action) => {

    switch (action.type) {
        case "Add":
            return { ...state, Products: action.payload }
        case "Remove":
            return { ...state, Products: action.payload }
        case "UpdatePrice":
            return { ...state, Price: action.payload }
        default: throw new Error("not match any case")
    };
}