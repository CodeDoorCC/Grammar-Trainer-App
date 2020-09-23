import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Author</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://codedoor.com/">CodeDoor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/CodeDoorCC/Grammar-Trainer-App">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>CONTACT US</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Footer;
