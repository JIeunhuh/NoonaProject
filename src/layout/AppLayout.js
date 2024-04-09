import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';
import './AppLayout.style.css'
// import netflix_logo from '../images/netflix_logo.svg'

export const AppLayout = () => {
  return (
    <div className='appLayout' style={{padding:'0px', margin:'0px'}}>
    <Navbar bg="dark" data-bs-theme="dark"expand="lg" className="bg-body-tertiary color-nav">
      <Container fluid>
        <Navbar.Brand style={{width : '10%', height:'10%'}} href="/"><img style={{width : '100%'}} src='data:image/png;base64,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'alt='netflix logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav variant='light'
            className="me-auto my-2 my-lg-0 navTxt"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home" className="col-lg-6 col-sm-12 text-lg-end text-sm-start">Home</Nav.Link>
            <Nav.Link href="/movies" className="col-lg-6 col-sm-12 text-lg-end text-sm-start">Movie</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}
