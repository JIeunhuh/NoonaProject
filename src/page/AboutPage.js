import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage = () => {
    // page 이동을 위한 router hook
    const navigate = useNavigate()
    const gotoHome=()=>{
        // 선언한 hook 변수를 사용해 파라미터로 이동할 url 던져주면 됨
        navigate('/')
    }
    return (
        <div>
            <div>AboutPage</div>
            <button onClick={()=>gotoHome()}>Go to Homepage</button>
        </div>
    )
}
