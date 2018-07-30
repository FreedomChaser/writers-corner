import {createStore, combineReducers} from 'redux'
import plotReducer from './plotReducer'
import charaReducer from './charaReducer'

rootReducer = combineReducers({plot: plotReducer, character: charaReducer})

export default createStore(rootReducer)