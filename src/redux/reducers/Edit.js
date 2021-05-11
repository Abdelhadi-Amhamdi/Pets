
const EditReducer = (state = [] , action) => {
    switch(action.type){
        case 'EDIT' :
            return  state = action.paylod
        default :
            return []
    }
}
export default EditReducer