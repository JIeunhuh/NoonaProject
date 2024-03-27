import React from 'react'
import { useParams } from 'react-router'

export const ProductDetailPage = () => {
    // url의 파라미터를 읽어온다
    const params = useParams()
    console.log('parameter', params)
  return (
    <div>ProductDetailPage</div>
  )
}
