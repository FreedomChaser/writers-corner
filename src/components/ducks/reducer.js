import {combineReducers} from 'redux'
import plotReducer from './plotReducer'
import charaReducer from './charaReducer'

export default combineReducers({plot: plotReducer, character: charaReducer})


