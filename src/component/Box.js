import React from 'react'
export const Box = ({title,item}) => {
  console.log(item)
  return (
      <div className='box'>
        <div style={{textAlign : 'center'}}>{title}</div>
        <img className="pic" src={item===null ? "https://cdn-icons-png.flaticon.com/128/6688/6688560.png" : item.img} alt='가위바위보'/>
        <div style={{fontWeight : 'normal', fontSize:'45px'}}>{ item===null ? "Let's Play!" : "You WIN !"}</div>
      </div>
  )
}
