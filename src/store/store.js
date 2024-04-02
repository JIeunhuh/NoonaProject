import { createStore, applyMiddleware } from "redux";
import productReducer from './reducer/reducer'
import { thunk } from "redux-thunk";
let store = createStore(productReducer, applyMiddleware(thunk))

export default store