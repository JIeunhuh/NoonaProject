import React from 'react'
export const Box = ({title,item}) => {
  console.log(item)
  return (
      <div className='box'>
        <div style={{textAlign : 'center'}}>{title}</div>
        <img className="pic" src={item && item.img} alt='가위바위보'/>
        <div style={{fontWeight : 'normal', fontSize:'45px'}}>You WIN !</div>
      </div>
  )
}
