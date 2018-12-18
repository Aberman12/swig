import React from "react";
import { Container, Content } from "native-base";

import Counter from "./components/Counter";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Content padder>
          <Counter />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}
