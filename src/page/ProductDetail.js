import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatPrice } from '../util/utils';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../store/actions/productAction';
export const ProductDetail = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.product.productDetail)
  console.log(data?.img)
  // dropdown
  // let selectSize = Object.values(data?.size)
  useEffect(() => {
     dispatch(productAction.getProductDetail(id))
  }, [id])
  return (
    <Container>
      <Row>
        <Col lg><img style={{ width: '100%' }} src={data?.img} alt='detailproduct' /></Col>
        <Col className='mx-2'>
          <div>{data?.title}</div>
          <div style={{ marginTop: '3%' }}>{data && formatPrice(data?.price)}원</div>
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
