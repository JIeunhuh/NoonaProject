import React, { useEffect } from 'react'
import { ProductCard } from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { productAction } from '../store/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

export const ProductAll = () => {
    const [query] = useSearchParams()
    const dispatch = useDispatch()
    const item = useSelector((state)=>state.product.productList)
    useEffect(() => {
        let searchQurey = query.get("q") || ''
        // 바로 store로 가는 게 아니고 중간에 써준 함수로 전달
       dispatch(productAction.getProduct(searchQurey))
    }, [query, dispatch])
    return (
        <div>
            {item && <ProductCard item={item} />}
        </div>
    )
}
