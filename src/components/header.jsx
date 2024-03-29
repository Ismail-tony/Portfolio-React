import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar expand="sm col-lg-12" className='navbar'>
            <Container fluid>
            <Link to='/home' className='navbar-brand'>
                &lt;/ ITB portfolio &gt;
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/about'>_about</Nav.Link>
                        <Nav.Link as={Link} to='/project'>_project</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>_contact</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header