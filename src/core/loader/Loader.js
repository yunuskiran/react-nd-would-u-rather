import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-color: red;
`;
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader color="#ffffff" css={override} size={250} />
    </div>
  );
}

export default Loader;
