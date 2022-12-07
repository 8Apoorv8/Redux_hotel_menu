

const initialValue = {
    cart: []
}


export const workReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case "ADD":
            const itemIndex = state.cart.findIndex((item) => item.id === payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].qnty += 1
            }
            else {
                const temp = { ...payload, qnty: 1 }
                return { ...state, cart: [...state.cart, temp] }
            }
        // return { ...state, cart: [...state.cart, payload] }
        case "DEL":
            const data = state.cart.filter((ele) => ele.id != payload)
            return {
                ...state, cart: data
            }
        default:
            return state;
    }
}