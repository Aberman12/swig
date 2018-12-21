import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, CardSection, Button } from "./common";
import SlideShow from "./common/Slideshow.js";
import img1 from "./common/demo1.gif";
import img2 from "./common/demo2.gif";

class StartingScreen extends Component {
  goToBasic() {
    Actions.counter();
  }

  enterBMI() {
    Actions.bmi();
  }

  render() {
    return (
      <Card style={styles.loginStyle}>
        <SlideShow
          height={400}
          indicatorSelectedColor="orange"
          indicatorColor="black"
          dataSource={[img1, img2]}
        />
        <CardSection />
        <CardSection>
          <Button onPress={this.goToBasic.bind(this)}>Quick Counter</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.enterBMI.bind(this)}>Enter BMI</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  loginStyle: {
    marginBottom: 653
  }
};

export default StartingScreen;
