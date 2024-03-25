import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap'

export const WeatherBtn = ({cities,setCity}) => {
    const [btnColor, setBtnColor] = useState(null);
    
    const clickCity=(city,idx)=>{
      setBtnColor(idx)
      setCity(city)
    }
  return (
    <div style={{margin : '1.5%', width : '800px', display:'flex', justifyContent:'center'}}>
        {cities.map((item,idx)=>
          <Button style={{backgroundColor:btnColor===idx ? 'rgb(62, 86, 59)':'green'}} className='btn' variant='success' key={idx} onClick={()=>clickCity(item,idx)}>{item}</Button>
        )}
    </div>
  )
}
