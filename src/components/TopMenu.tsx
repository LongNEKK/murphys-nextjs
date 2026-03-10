'use client';

import {Image, Container, Nav, Navbar} from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src="/murphyslogowhite.png" width={200} alt="Murphy's logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#">To Go Ordering</Nav.Link>
            <Nav.Link href="#"><Instagram/></Nav.Link>
            <Nav.Link href="#"><Facebook/></Nav.Link>
            <Nav.Link href="#"><Twitter/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);


export default TopMenu;
