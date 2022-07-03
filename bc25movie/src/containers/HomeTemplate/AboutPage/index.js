import React from "react";
import styled from "styled-components";

function AboutPage() {
  return (
    <Wrapper primary>
      <Title>
        <div>index</div>
      </Title>
    </Wrapper>
  );
}
const Title = styled.h1`
  padding: 4em;
  background: ${(props) => (props.primary ? "red" : "blue")};
`;
const Wrapper = styled.div`
  div {
    color: white;
    background-color: green;
    font-size: 20px;
    text-align: center;
  }
`;

export default AboutPage;
