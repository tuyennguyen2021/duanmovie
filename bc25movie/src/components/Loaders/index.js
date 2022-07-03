import React from "react";
import styled, { keyframes } from "styled-components";

function Loader() {
  return <LoaderContainer></LoaderContainer>;
}
const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
