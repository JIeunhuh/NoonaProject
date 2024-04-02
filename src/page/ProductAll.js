import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom'

export const ProductAll = () => {
    const [items, setItems] = useState([])
    const [query] = useSearchParams()

    useEffect(() => {
        let searchQurey = query.get("q") || ''
        let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products?q=${searchQurey}`
         fetch(url)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.log(err))
    }, [query])
    return (
        <div>
            {items && <ProductCard item={items} />}
        </div>
    )
}
