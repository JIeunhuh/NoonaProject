import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom'
import productAction from '../store/actions/productAction'
import { useDispatch } from 'react-redux'

export const ProductAll = () => {
    const [items, setItems] = useState([])
    const [query] = useSearchParams()
    const dispatch = useDispatch()

    useEffect(() => {
        let searchQurey = query.get("q") || ''
        // 바로 store로 가는 게 아니고 중간에 써준 함수로 전달
       dispatch(productAction.getProduct(searchQurey))
    //    setItems()
    }, [query])
    return (
        <div>
            {items && <ProductCard item={items} />}
        </div>
    )
}
