import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router';
import './AppLayout.style.css'
import netflix_logo from '../images/logo.png'

export const AppLayout = () => {
  const [kw,setKw]=useState()
  const navigate = useNavigate()
  const getKw=(e)=>{
    e.preventDefault()
    // url 바꿔주기
    navigate(`/movies?q=${kw}`)
    setKw('')

  }
  return (
    <div className='appLayout' style={{padding:'0px', margin:'0px'}}>
    <Navbar bg="dark" data-bs-theme="dark"expand="lg" className="bg-body-tertiary color-nav">
      <Container fluid>
        <Navbar.Brand style={{width : '8%', height:'8%', paddingRight:'0px'}} href="/"><img style={{width : '100%'}} src={netflix_logo} alt='netflix logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav variant='light'
            className="me-auto my-2 my-lg-0 navTxt"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="col-lg-6 col-sm-12 text-lg-end text-sm-start">Home</Nav.Link>
            <Nav.Link href="/movies" className="col-lg-6 col-sm-12 text-lg-end text-sm-start">Movie</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e)=>getKw(e)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={kw}
              onChange={(e)=>setKw(e.target.value)}
            />
            <Button type='submit' variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}
