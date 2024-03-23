import React from 'react'
import { Button } from 'react-bootstrap'

export const WeatherBtn = () => {
    
  return (
    <div style={{margin : '3%'}}>
        <Button variant='success'>Current Location</Button>
        <Button variant='success'>New York</Button>
        <Button variant='success'>LA</Button>
        <Button variant='success'>Shanhai</Button>
    </div>
  )
}
