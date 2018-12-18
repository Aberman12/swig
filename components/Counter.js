import React, { Component } from "react";
import { Text, View, Button, Alert } from "react-native";

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
        <View>
          <Text>{this.state.count}</Text>
        </View>
        <View>
          <View>
            <Button color="black" title="+" onPress={this.increment} />
          </View>
          <View>
            <Button color="black" title="-" onPress={this.decrease} />
          </View>
        </View>
      </View>
    );
  }
}
