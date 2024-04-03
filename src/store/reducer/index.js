import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./reducer";

export default combineReducers({
    auth: authReducer,
    product: productReducer,
})