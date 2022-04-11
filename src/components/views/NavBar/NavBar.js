import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand='lg' bg='primary' variant='dark' className='px-3 mt-4 mb-4 rounded'>
      <Navbar.Brand as={NavLink} to='/' className='me-auto'>Blog.app</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/categories'>Categories</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;