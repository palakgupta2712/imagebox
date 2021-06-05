import React, { useContext, useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { ImageModel } from "../../models";
import Image from "../Feed/Image";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
function Images() {
  const user = useContext(UserContext);
  const [imagesData, setImagesData] = useState([]);

  async function getImagesData() {
    const result = (await DataStore.query(ImageModel)).filter(
      (c) => c.uploadedBy === user.username
    );
    setImagesData(result);
  }

  useEffect(() => {
    getImagesData();
  }, []);

  return (
    <Container>
      {imagesData.map((imageData) => (
        <Image imageData={imageData} />
      ))}
    </Container>
  );
}

export default Images;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
