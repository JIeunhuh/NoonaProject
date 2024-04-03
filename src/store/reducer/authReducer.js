import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: '',
    password: '',
    authenticate: false,
}

const authReducer= createSlice({
    // let { type, payload } = action
     name : 'auth',
     initialState,
     reducers :{
        login(state,action){
            state.id = action.payload.id
            state.password = action.payload.password
            state.authenticate = true
        },
        logout(state,action){
            state.authenticate = action.payload.authenticate
        }
     }       
    // switch (type) {
    //     case "LOGIN_SUCCESS":
    //         return { ...state, id: payload.id, password: payload.password, authenticate: true }
    //     case "LOGOUT":
    //         return { ...state, authenticate: payload.authenticate };
    //     default:
    //         return { ...state };
    })


export default authReducer.reducer;
export const authActions = authReducer.actions