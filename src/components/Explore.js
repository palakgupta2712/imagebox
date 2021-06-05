import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Explore() {
  return (
    <Container>
      <Tab
        to="/feed"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          borderBottom: "5px solid red",
        }}
      >
        <h2>Feed</h2>
      </Tab>
      <Tab
        to="/uploaded"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
          borderBottom: "5px solid red",
        }}
      >
        <h2>Your items</h2>
      </Tab>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Tab = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;
`;
