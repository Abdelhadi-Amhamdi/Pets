const registerReducer = (state = false , action) => {
    switch(action.type) {
        case 'Login' :
            return !state
        default :
            return state
    }
}

export default registerReducer