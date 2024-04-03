import {productActions} from '../reducer/reducer'
function getProduct(searchQurey){
    return async(dispatch, getState) =>{
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products?q=${searchQurey}`
        let res = await fetch(url)
        let data = await res.json()
          
        dispatch(productActions.getAll({data}))
    }

}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getDetail({data}))
    };
}
export const productAction={getProduct,getProductDetail}