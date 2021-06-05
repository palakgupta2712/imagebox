import React, { useContext, useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import styled from "styled-components";
import { IoIosShareAlt, IoIosHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { UserContext } from "../../context/UserContext";

const Image = ({ imageData }) => {
  const user = useContext(UserContext);
  const [url, setUrl] = useState([]);

  const loadImageUrl = async (imageData) => {
    await Storage.get(imageData.S3key).then((res) => {
      setUrl(res);
    });
  };

  useEffect(() => {
    loadImageUrl(imageData);
  }, []);

  return (
    <Container>
      <img
        src={url}
        alt="images"
        style={{
          height: "150px",

          cursor: "pointer",
          borderRadius: "7px",
        }}
      />
      <Details>
        <ImageTitle>{imageData.title}</ImageTitle>
        <IconContainer>
          <IoIosHeartEmpty
            style={{ color: "white", fontSize: "18px", cursor: "pointer" }}
          />
          <IoIosShareAlt
            style={{
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              margin: "0px 7px",
            }}
          />
          {user.username === imageData.uploadedBy && (
            <MdDelete
              style={{ color: "white", fontSize: "18px", cursor: "pointer" }}
            />
          )}
        </IconContainer>
      </Details>
      <Creator>
        <span>@{imageData.uploadedBy}</span>
      </Creator>
    </Container>
  );
};

export default Image;

const Container = styled.div`
  padding: 20px;
`;

const IconContainer = styled.div``;

const Details = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
`;

const ImageTitle = styled.p`
  color: white;
  font-weight: 700;
`;
const Creator = styled.div`
  color: white;
  margin: 5px;
  font-size: 12px;
`;
