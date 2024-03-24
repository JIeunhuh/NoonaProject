import React from 'react'
import { Button } from 'react-bootstrap'

export const WeatherBtn = ({cities,setCity}) => {
    
    const clickCity=(city)=>{
      setCity(city)
    }
  return (
    <div style={{margin : '1.5%', width : '800px', display:'flex', justifyContent:'center'}}>
        {cities.map((item,idx)=>
          <Button variant='success' key={idx} onClick={()=>clickCity(item)}>{item}</Button>
        )}
    </div>
  )
}
