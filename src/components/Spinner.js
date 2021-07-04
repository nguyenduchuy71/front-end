import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
function Spinner() {
  return (
    <SpinnerContainer>
      <CircularProgress disableShrink />
    </SpinnerContainer>
  );
}
const SpinnerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Spinner;
