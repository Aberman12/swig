import React from "react";
import { Header, Button, Icon, Body, Title, Left, Right } from "native-base";

export default function AppHeader() {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="ios-menu" />
        </Button>
      </Left>
      <Body>
        <Title>Swig</Title>
      </Body>
      <Right />
    </Header>
  );
}
