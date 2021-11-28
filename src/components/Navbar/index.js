import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ handleShowModal }) => {
  return (
    <Nav defaultActiveKey="/">
      <Bars />
      <NavMenu>
        <NavLink to="/" activestyle="true">
          Random Dish
        </NavLink>
        <NavLink to="/events" activestyle="true">
          Favorites
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink onClick={handleShowModal} to="/AddRecipeModal">
          Add custom dish
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
