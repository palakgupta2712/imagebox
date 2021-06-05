import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router";
function BackButton() {
  let history = useHistory();
  return (
    <div>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        <IoIosArrowBack />
        Go Back
      </Button>
    </div>
  );
}

export default BackButton;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 7px;
  font-size: 16px;
  margin: 10px;
  color: white;
  letter-spacing: 5px;
  @media (min-width: 600px) {
    display: none;
  }
`;
