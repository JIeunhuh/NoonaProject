import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import productReducer from './reducer/reducer'
// let store = createStore(
//     rootReducer,
//     applyMiddleware(thunk))
let store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
    }
})
export default store