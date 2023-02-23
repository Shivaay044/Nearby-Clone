import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";

function Navbar() {
  return (
    <Navbar fixed='top' bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" color="light">
            <Image style={{heigth:"80px",width:"80px"}} src="http://3.bp.blogspot.com/_0bRrhyfW294/TOywiO87peI/AAAAAAAAGeA/bnS4J9sN-Y8/w1200-h630-p-k-no-nu/az+tucs+steinfelds+50s.jpg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{margin:"20px",borderLeft:"1px solid white"}}>How it Works</Nav.Link>
            <Nav.Link href="admin" style={{margin:"20px",borderRight:"1px solid white"}}>List your Business</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button style={{margin:"20px",backgroundColor:"red"}}>
            <Nav.Link href="/login">
              Login/Signup
            </Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;