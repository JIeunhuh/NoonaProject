import React from 'react'
export const Box = ({ title, item, res }) => {
  console.log(item)
  return (
    <div className='box' style={res == "WIN!" ? { borderColor: 'green' } : res == "Lose.." ? { borderColor: 'red' } : { borderColor: 'pink' }}>
      <div style={{ textAlign: 'center' }}>{title}</div>
      {item === null? (<i class="nes-octocat animate"></i>) : (<img className="pic" src={item.img} alt='가위바위보' />)}
      <div style={{ fontWeight: 'normal', fontSize: '45px' }}>{item === null ? "Let's Play!" : res}</div>
    </div>
  )
}
