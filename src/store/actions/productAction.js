function getProduct(searchQurey){
    return (dispatch, getState) =>{
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products?q=${searchQurey}`
        let data
        fetch(url)
           .then((res) => res.json())
           .then((data) => data = data)
           .catch((err) => console.log(err))
        dispatch({type:"GET_SUCCESS", payload : data})
    }

}

export const productAction={getProduct}