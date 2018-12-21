import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";
import { Actions } from "react-native-router-flux";
import { saveBW } from "../redux/actions";

const mapStateToProps = state => {
  return { userBW: state.userBW };
};

class getBW extends Component {
  onBWChange(number) {
    this.props.saveBW(number);
  }

  goToNextPage() {
    if (this.props.userBW) {
      Actions.advancedCounter();
    } else {
      Alert.alert("Please enter your weight in lbs first!");
    }
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Text style={{ marginBotton: 30, fontSize: 20 }}>
              Please enter your weight so we can keep you on track!
            </Text>
          </CardSection>
          <CardSection>
            <Input
              label="Body Weight: "
              placeholder="(in pounds)"
              onChangeText={this.onBWChange.bind(this)}
              value={this.props.BW}
              placeholder="ex: 145"
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.goToNextPage.bind(this)}>Next</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    saveBW
  }
)(getBW);
