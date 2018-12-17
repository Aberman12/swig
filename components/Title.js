import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

export default class Title extends Component {
  render() {
    const { titleWrapper, title, subtitle } = styles;
    return (
      <View style={titleWrapper}>
        <Text style={title}>Swig</Text>
        <Text style={subtitle}>The Drink Tracker</Text>
      </View>
    );
  }
}
