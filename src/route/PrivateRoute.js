import React from 'react'
import { ProductDetail } from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
  const status = useSelector((state)=>state.auth.authenticate)
  console.log(status)
  return (
    status && status === true ? <ProductDetail/> : <Navigate to='/login'/>
  )
}
