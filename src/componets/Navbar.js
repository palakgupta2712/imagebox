import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo>ImageBox</NavLogo>
      <NavMenu>
        <p>Hi! username</p>
        <Button>Logout</Button>
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 18px;
  height: 80px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const NavLogo = styled.div`
  margin-left: 50px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin-right: 20px;
`;

const Button = styled.button`
  margin: 0px 14px;
  padding: 8px 14px;
  border: none;
  font-size: 16px;
`;
