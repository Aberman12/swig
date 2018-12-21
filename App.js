import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./src/redux/reducer";
import Router from "./src/Router";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
