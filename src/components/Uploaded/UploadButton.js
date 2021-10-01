import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

function UploadButton() {
  return (
    <Container>
      <Link to="/new">
        <Button>
          <IoIosAddCircle style={{ fontSize: "40px", color: "white" }} />
        </Button>
      </Link>
    </Container>
  );
}

export default UploadButton;
const Container = styled.div`
  float: right;
  margin-right: 5vh;
  @media (min-width: 600px) {
    margin-right: 20vh;
  }
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
