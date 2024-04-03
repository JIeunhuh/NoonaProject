import { createSlice } from "@reduxjs/toolkit"
let initialState = {
    productList: [],
    productDetail: {}
}
// createslice(name, initialState,reducer) action name을 만들필요 없다
// function productReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_SUCCESS":
//             return { ...state, productList: payload.data }
//         case "GET_DETAIL":
//             return { ...state, productDetail: payload.data }
//         default:
//             return { ...state }
//     }
// }


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // return하고 새 객체 배열 생성할 필요 없음 !
        getAll(state, action) {
            state.productList= action.payload.data 
        },
        getDetail(state=initialState, action){
            state.productDetail = action.payload.data
        }
    }
})
export const productActions = productSlice.actions
export default productSlice.reducer