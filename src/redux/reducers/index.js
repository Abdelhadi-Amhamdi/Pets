
import POSTSReducer from './Posts'
import EditReducer from './Edit'
import searchReducer from './Search'
import Lang_Reducer from './lang'
import {combineReducers} from 'redux'

const allReducetrs = combineReducers({
    Posts : POSTSReducer ,
    EditPost : EditReducer,
    Search : searchReducer,
    lang : Lang_Reducer
})

export default allReducetrs