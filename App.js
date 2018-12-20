import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import { Container, Content } from "native-base";

import Counter from "./components/Counter";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppHeader />
          <Content padder>
            <Counter />
          </Content>
          <AppFooter />
        </Container>
      </Provider>
    );
  }
}
