import React from "react";
import Explore from "../Explore";
import UploadButton from "./UploadButton";
import CurrentUserImages from "./CurrentUserImages";

function Uploaded() {
  return (
    <div>
      <Explore />
      <UploadButton />
      <CurrentUserImages />
    </div>
  );
}

export default Uploaded;
