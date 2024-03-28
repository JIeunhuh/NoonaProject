import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard'

export const ProductAll = () => {
    const [items, setItems] = useState([])
    const getAllProducts=()=>{
        // let searchQurey = query.get("q") || "";
        let url = `http://my-json-server.typicode.com/JIeunhuh/NoonaProject/products`
        fetch(url)
            .then((res)=> res.json())
            .then((data)=>setItems(data))
            .catch((err)=>console.log(err))
        }
    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <div>
        {items && <ProductCard item={items}/>}
    </div>
  )
}
