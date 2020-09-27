const initialState = { 
    token: null,
    user: {
        name: 'siyamak'
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        state.token = action.token;
        return state;
      default:
        return state;
    }
  }


export default authReducer;
