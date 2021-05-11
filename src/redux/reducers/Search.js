const searchReducer = (state = '' , action) => {
    switch(action.type) {
        case 'SEARCH' :
            return action.paylod
        default :
            return state
    }
}

export default searchReducer