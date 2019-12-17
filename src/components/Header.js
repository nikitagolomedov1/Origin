import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Logout from "../components/Logout";

const Header = props => {
  const [isOpen] = useState(false);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/weatherpage">WeatherPage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/history">History List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/history/details">History Details</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile/edit">Edit Profile</NavLink>
            </NavItem>
          </Nav>
          <Logout />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
