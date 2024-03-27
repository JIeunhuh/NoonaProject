import React from 'react'
// 사진 -> 옷 이름 -> 가격 -> 신제품유무
export const ProductCard = ({item}) => {
    let card = item.map((item)=>
        <div>
            <img src={item.img} alt='clothes'></img>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.new === true ? '신제품' : ''}</div>
        </div>
    )
  return (
    <div className='card'>{card}</div>
  )
}
