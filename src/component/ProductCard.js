import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
// 사진 -> 옷 이름 -> 가격 -> 신제품유무
export const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/product/${item.id}`)
  }
  let card = item.map((item, idx) =>
    <Col className='my-2' lg={3} xs={12} md={6} key={idx} m >
      <div className="mx-1" onClick={showDetail}>
        <img src={item.img} alt='clothes' style={{ width: '100%' }} />
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.new === true ? '신제품' : ''}</div>
      </div>
    </Col>
  )
  return (
    <Container >
      <Row>
        {card}
      </Row>
    </Container>
  )
}
