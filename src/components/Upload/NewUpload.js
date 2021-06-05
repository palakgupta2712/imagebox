import React, { useContext, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Image } from "../../models";
import { BiUpload } from "react-icons/bi";

import Amplify, { Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import BackButton from "./BackButton";
Amplify.configure(awsconfig);

function NewUpload() {
  const user = useContext(UserContext);

  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const hiddenFileInput = React.useRef(null);

  async function uploadImage() {
    const filename = file.name.split(".");
    const updatedFilename =
      filename[0] + Math.round(new Date().getTime() / 1000) + "." + filename[1];
    const KEY = `${user.username}/${updatedFilename}`;

    const res = await Storage.put(KEY, file).then(
      await DataStore.save(
        new Image({
          title: title,
          uploadedBy: user.username,
          uploadedOn: new Date().toString(),
          S3key: KEY,
        })
      )
    );

    console.log(res);
  }
  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  }
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Container>
        <BackButton />
        <FormContainer>
          <div>
            <UploadContainer>
              <Button onClick={handleClick}>
                <BiUpload style={{ fontSize: "30px" }} />
                <p> Click to upload image</p>
              </Button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </UploadContainer>
          </div>
          <div>
            <Input
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <SaveButton onClick={uploadImage}>Save</SaveButton>
        </FormContainer>
      </Container>
    </>
  );
}

export default NewUpload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 600px) {
    padding: 10vh;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  width: 40vh;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 7px;
  margin: auto;
  @media (min-width: 600px) {
    width: 70vh;
    padding: 20px;
  }
`;
const Input = styled.input`
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 700;
  border: 0px;
  border-bottom: 1px solid black;
  outline: none;
  &::placeholder {
    font-size: 18px;
    font-weight: 700;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed black;
  padding: 50px;
  background-color: #ececec;
  border-radius: 7px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 50%;
  border: none;
`;

const SaveButton = styled.button`
  padding: 6px 14px;
  border-radius: 5px;
  border: none;
  background-color: #181818;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;
