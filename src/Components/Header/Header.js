import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import './Header.css'


const Header = () => {
    const [p, setP] = useState(0)
    
    const btnClick = () => {
        if (p === 0) {
            setP(1);
        }
        else if(p===1){
            setP(0);
        }
    }


    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-decoration-none text-primary fw-bold'>Programming Iskool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="my-4 my-lg-3 mx-3"


                        >

                            <Nav.Link><NavLink to='/' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            }
                            >Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/faq' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >Faq</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/courses' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/blog' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >Blog</NavLink></Nav.Link>
                            <Nav.Link onClick={btnClick}>
                                {
                                    p===1? <MoonIcon className='icon'></MoonIcon>:
                                    <SunIcon className='icon'></SunIcon>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;