import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatPrice } from '../util/utils';
export const ProductDetail = () => {
  let { id } = useParams()
  const [data, setData] = useState(null)

  // dropdown
  // let selectSize = Object.values(data?.size)
  useEffect(() => {
     let url = `https://my-json-server.typicode.com/JIeunhuh/NoonaProject/products/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <Container>
      <Row>
        <Col lg><img style={{ width: '100%' }} src={data?.img} alt='detailproduct' /></Col>
        <Col className='mx-2'>
          <div>{data?.title}</div>
          <div style={{ marginTop: '3%' }}>{data && formatPrice(data.price)}원</div>
          <select>
            {data && data.size.map((item, idx)=>
            <option value={idx}key={idx}>{item}</option>) }
          </select>
        </Col>

        <button type='submit'>추가</button>
      </Row>
    </Container>
  )
}
