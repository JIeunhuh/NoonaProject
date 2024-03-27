import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const ProductPage = () => {
    // 쿼리의 값을 가져오는 react hook
    let [query, setQuery] = useSearchParams()

    // key값을 통해 value를 가져올 수 있다
    console.log('getQuery', query.get('q'))
  return (
    <div>ProductPage</div>
  )
}
