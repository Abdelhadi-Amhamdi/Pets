

const POSTSReducer = (state = [] , action) => {
    switch(action.type) {
        case 'Posts' :
            return state = action.paylod
        case 'SPLICE' :
            return state = state.filter(item => item._id !== action.index)
            
        default :
            return []
    }
}
export default POSTSReducer
