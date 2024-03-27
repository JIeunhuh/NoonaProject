import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Homepage = () => {
    const navigate = useNavigate()
    const goProductPage=()=>{
        // url 주소에 ? 뒤에 나오는 것들을 쿼리라고 함
        // 쿼리와 파라미터는 다름 ; 쿼리는 옵션이므로 값을 아무거나 넣어도 해당 url에 있는페이지로 이동하지만,
        // 파라미터가 달라지면 url 주소 자체가 달라진다.
        navigate('/products?q=pants')
    }
    return (
        <div>
            <div>Homepage</div>
            <Link to='/about'>go to </Link>
            <button onClick={goProductPage}>go to Product</button>
    </div>
    )
}
