import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Content, Button, Text } from "native-base";

export default class Counter extends Component {
  state = {
    count: 0
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    const { count } = this.state;
    switch (count) {
      case 2:
        Alert.alert("💧 Drink Water 💧");
        break;
      case 5:
        Alert.alert("💧 Drink Water 💧");
        break;
      case 8:
        Alert.alert("💧 Drink Water 💧");
        break;
      case 11:
        Alert.alert("🛑 S ✋ T 🛑 O ✋ P 🛑");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button block success onPress={this.increment}>
          <Text>+</Text>
        </Button>
        <Button block danger onPress={this.decrease}>
          <Text>-</Text>
        </Button>
      </View>
    );
  }
}
