import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Explore() {
  return (
    <Container>
      <Tab
        to="/feed"
        activeStyle={{
          fontWeight: "bold",
          color: "#e50914",
          borderBottom: "5px solid #e50914",
        }}
      >
        <h2>Feed</h2>
      </Tab>
      <Tab
        to="/uploaded"
        activeStyle={{
          fontWeight: "bold",
          color: "#e50914",
          borderBottom: "5px solid #e50914",
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
  color: white;
  padding: 10px;
`;
