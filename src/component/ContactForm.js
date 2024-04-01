import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
export const ContactForm = () => {
    const [name, setName] = useState()
    const [num, setNum] = useState()
    const dispatch = useDispatch()

    const submitInfo=(e)=>{
        e.preventDefault()
        dispatch({type : "ADD_CONTACT", payload:{name, num}})
        setName('')
        setNum('')
    }
  return (
    <div>
     <Form onSubmit={(e)=>submitInfo(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" value={num} onChange={(e)=>{setNum(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가 
      </Button>
    </Form>
    </div>
    )
}
