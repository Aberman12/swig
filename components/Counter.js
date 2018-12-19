import React, { Component } from "react";
import { View, Alert } from "react-native";
import { connect } from "react-redux";
import { Content, Button, Text } from "native-base";
import { increaseCount, decreaseCount } from "../redux/actions";

const mapStateToProps = state => {
  return { count: state.count };
};

class Counter extends Component {
  decrease = () => {
    const { count, dispatch } = this.props;
    dispatch(decreaseCount());
  };

  increment = () => {
    const { count, dispatch } = this.props;
    dispatch(increaseCount());

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
        <Text>{this.props.count}</Text>
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

export default connect(mapStateToProps)(Counter);
