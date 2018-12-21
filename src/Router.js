import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import Counter from "./components/Counter";
import StartingScreen from "./components/StartingScreen";
import BMICounter from "./components/BMICounter";
import AdvancedCounter from "./components/AdvancedCounter";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="starting" component={StartingScreen} title="Swig" initial />
        <Scene key="counter" component={Counter} title="Swig" />
        <Scene key="bmi" component={BMICounter} title="Swig" />
        <Scene key="advancedCounter" component={AdvancedCounter} title="Swig" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
