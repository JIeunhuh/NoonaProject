import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom'

export const ProductAll = () => {
    const [items, setItems] = useState([])
    const [query] = useSearchParams()
    const getAllProducts = async () => {
        let searchQurey = query.get("q") || ''
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products?q=${searchQurey}`
        await fetch(url)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllProducts()
    }, [query])
    return (
        <div>
            {items && <ProductCard item={items} />}
        </div>
    )
}
