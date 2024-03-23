import React, { useEffect, useState } from 'react'
import './WeatherApp.css'
import { WeatherBox } from './component/WeatherBox'
import { WeatherBtn } from './component/WeatherBtn'
export const WeatherApp = () => {
    const [weather, setWeather] = useState(null)
    // get current location info
    const getCurLocation = () => {
        //  현재 위치정보 가져오기
        // 비동기적으로 호출하므로 작업이 실행되기 전에 fetch로 data를 가져오게 되면 useState의 초기값을 가져온다.
        // useState도 쓸필요 없어 보임
        // async, await
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            const mykey = '9a275cedf6cd3d4919d4407baab53244'
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${mykey}&units=metric`
            fetch(url)
                .then((res) => res.json())
                .then((data) => setWeather(data))
                .catch((err) => console.log(err))
        });

    }

    useEffect(() => {
        getCurLocation()

    }, []);
    return (
        <>
            <div style={{fontSize : '40px', color:'purple'}}>오늘의 날씨</div>
            <div className='container'>
                <WeatherBox weather={weather}/>
                <WeatherBtn />
            </div>
        </>
    )
}
