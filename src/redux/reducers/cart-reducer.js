const initialState = {
    count: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            state.count = action.count;
            return state;
        default:
            return state;
    }
}


export default cartReducer;