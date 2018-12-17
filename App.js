import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Title from "./components/Title";
import Counter from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <Title />
        <Counter />
      </View>
    );
  }
}
