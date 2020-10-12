import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

const Container = styled.div({
  color: "red",
  border: "solid 1px #333",
});

export const Home: FunctionComponent = () => (
  <Container>
    <h1 css={{ color: "#f00" }}>Hello World</h1>
  </Container>
);

export default Home;
