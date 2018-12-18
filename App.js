import React from "react";
import { Container, Content } from "native-base";

import Counter from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Counter />
        </Content>
      </Container>
    );
  }
}
