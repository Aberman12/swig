import React, { Component } from "react";
import { Text, View, Button, Alert } from "react-native";
import { styles } from "../styles";

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
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{this.state.count}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.incrementButton}>
            <Button color="white" title="+" onPress={this.increment} />
          </View>
          <View style={styles.decreaseButton}>
            <Button color="white" title="-" onPress={this.decrease} />
          </View>
        </View>
      </View>
    );
  }
}
