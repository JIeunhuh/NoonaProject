import React from 'react'

export const WeatherBox = ({weather}) => {
    console.log('weather', weather)
    let c = parseInt(weather?.main.temp)
    let f = parseInt((c * 9/5) + 32)
    return (
    <div className='weatherBox'>
        <div>{weather?.name}</div>
        <h2>{c}C / {f}F</h2>
        <div>{weather?.weather[0].description}</div>
    </div>
  )
}
