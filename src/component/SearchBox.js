import React, { useState } from 'react'
import { Button, Col, Row , Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

export const SearchBox = () => {
  const dispatch = useDispatch()
  const [kw,setKw] = useState()
  const searchName=(e)=>{
    e.preventDefault()
    dispatch({type : 'SEARCH_USERNAME', payload:{kw}})
    setKw('')
  }
  return (
    <Form onSubmit={(e)=>searchName(e)}>
    <Row>
        <Col lg={10} className="mb-3">
            <Form.Control type='text' placeholder='이름을 입력해주세요' value={kw} onChange={(e)=>setKw(e.target.value)}/>
        </Col>
        <Col lg={2}><Button type='submit'>찾기</Button></Col>
        </Row>
        </Form>
  )
}
