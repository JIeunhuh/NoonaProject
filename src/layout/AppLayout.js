import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';
import './AppLayout.style.css'
import netflix_logo from '../images/netflix-1-logo-svgrepo-com.svg'

export const AppLayout = () => {
  return (
    <div className='appLayout' style={{padding:'0px', margin:'0px'}}>
    <Navbar bg="dark" data-bs-theme="dark"expand="lg" className="bg-body-tertiary color-nav">
      <Container fluid>
        <Navbar.Brand style={{width : '2%', height:'2%', paddingRight:'0px'}} href="/"><img style={{width : '100%'}} src={netflix_logo}alt='netflix logo'/></Navbar.Brand>
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
