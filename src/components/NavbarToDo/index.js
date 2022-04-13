import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export function NavbarToDo() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">To Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">TESTE</Nav.Link>
            <Nav.Link href="#link">TESTE</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TESTE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TESTE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TESTE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">TESTE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
