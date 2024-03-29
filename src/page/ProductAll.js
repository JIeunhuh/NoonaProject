import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard'

export const ProductAll = () => {
    const [items, setItems] = useState([])
    const getAllProducts=async ()=>{
        // const [query, setQuery] = useSearchParams();
        // let searchQurey = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products`
        await fetch(url)
            .then((res)=> res.json())
            .then((data)=>setItems(data))
            .catch((err)=>console.log(err))
        // setQuery(searchQurey)
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
