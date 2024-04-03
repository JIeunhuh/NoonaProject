let initialState={
    productList:[],
    productDetail:[]
}
function productReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case "GET_SUCCESS":
            return{...state,productList : payload.data}
        case "GET_DETAIL":
            return{...state, productDetail:payload.data}
        default:
            return{...state}
    }
}
export default productReducer