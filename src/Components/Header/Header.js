import React, { useContext, useState } from 'react';
import { Image, Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/react/24/solid'
import './Header.css'
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom'

const Header = () => {
    const [p, setP] = useState(0);
    const { user, logOut } = useContext(AuthContext);

    const btnClick = () => {
        if (p === 0) {
            setP(1);
        }
        else if (p === 1) {
            setP(0);
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
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
                             <Nav.Link><NavLink to='/about' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >About</NavLink></Nav.Link>
                            <Nav.Link onClick={btnClick}>
                                {
                                    p === 1 ? <MoonIcon className='icon'></MoonIcon> :
                                        <SunIcon className='icon'></SunIcon>
                                }
                            </Nav.Link>
                            <Nav.Link>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <NavLink className={({ isActive }) =>
                                                    isActive ? 'active' : 'text-warning text-decoration-none fw-bold mx-3'
                                                } onClick={handleLogOut}>Log out</NavLink>
                                                
                                                
                                            </>
                                            :
                                            <>
                                                <NavLink to='/login' className={({ isActive }) =>
                                                    isActive ? 'active' : 'text-warning text-decoration-none fw-bold mx-3'
                                                }>Login</NavLink>
                                                <NavLink to='/register' className={({ isActive }) =>
                                                    isActive ? 'active' : 'text-warning text-decoration-none fw-bold mx-3'
                                                }>Register</NavLink>
                                            </>
                                    }


                                </>
                                <Link to="/profile">
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL} title={user?.displayName} className='mx-3'>
                                        </Image>
                                        : <UserIcon className='icon'></UserIcon>
                                    }
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;