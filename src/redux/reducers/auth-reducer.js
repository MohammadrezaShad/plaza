const initialState = { 
    token: null,
    isSignedIn:false,
    user: {
        displayName:"",
        level: "",
        point: ""
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
