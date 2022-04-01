import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand='lg' bg='primary' variant='dark' className='px-3 mt-4 mb-4 rounded'>
      <Navbar.Brand className='me-auto'>Blog.app</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;