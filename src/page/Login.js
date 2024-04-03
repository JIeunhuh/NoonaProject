import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../store/actions/authenticateAction'

export const Login = ({setStatus}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // id, pw
  const [id,setId] = useState()
  const [pw, setPw] = useState()

  const loginUser =(e)=>{
    e.preventDefault()
    dispatch(authenticateAction.login(id,pw))
    navigate('/')
    alert('환영합니다 !')
  }
  return (
    <Container>
      <Form onSubmit={(e)=>loginUser(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Form.Control onChange={(e)=>setId(e.target.value)} type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Form.Control onChange={(e)=>setPw(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit" className='my-3'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
