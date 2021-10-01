import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { ImageModel } from "../../models";
import Image from "./Image";
import styled from "styled-components";
function Images() {
  const [imagesData, setImagesData] = useState([]);

  async function getImagesData() {
    await DataStore.query(ImageModel).then((res) => setImagesData(res));
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