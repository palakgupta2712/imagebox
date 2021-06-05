import Auth from "@aws-amplify/auth";
import React from "react";
import styled from "styled-components";
import { BiBox } from "react-icons/bi";

function Navbar({ user }) {
  return (
    <NavbarContainer>
      <NavLogo>
        <BiBox style={{ margin: "0px 5px" }} />
        ImageBox
      </NavLogo>
      <NavMenu>
        <p>Hi! {user.username}</p>
        <Button
          onClick={() => {
            Auth.signOut();
            window.location.reload();
          }}
        >
          Logout
        </Button>
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
    height: 100px;
  }
`;
const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  border: 1px solid #e50914;
  padding: 10px;
  letter-spacing: 6px;
  @media (max-width: 600px) {
    margin: 10px;
    padding: 6px;
  }
  color: #e50914;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin-right: 20px;
  @media (max-width: 600px) {
    margin: 2px;
  }
`;

const Button = styled.button`
  margin: 0px 14px;
  padding: 8px 16px;
  border: 1px solid white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 7px;
  background-color: black;
  color: white;
  &:hover {
    background-color: #333333;
  }
`;
