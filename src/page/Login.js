import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Login = ({setStatus}) => {
  const navigate = useNavigate()

  const loginUser =(e)=>{
    e.preventDefault()
    setStatus(true)
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
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit" className='my-3'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
