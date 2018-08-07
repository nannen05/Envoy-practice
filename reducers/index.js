import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import todos from './todos'
import data from './data'
//import visibilityFilter from './visibilityFilter'


export default combineReducers({
    data,
    routing: routerReducer
})
