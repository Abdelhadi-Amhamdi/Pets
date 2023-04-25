


const Lang_Reducer = (state = "EN" , action) => {
    switch(action.type) {
        case 'LANG' :
            return state = action.paylod
            
        default :
            return state = "EN"
    }
}
export default Lang_Reducer
