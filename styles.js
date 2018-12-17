import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  app: {
    // borderColor: "#d6d7da",
    height: "100%",
    backgroundColor: "brown"
  },
  titleWrapper: {
    backgroundColor: "black",
    marginTop: 20,
    paddingBottom: 30,
    paddingTop: 30
  },
  title: {
    color: "white",
    fontSize: 100,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 6,
    fontStyle: "italic"
  },
  counterContainer: {
    borderRadius: 500,
    backgroundColor: "black",
    marginTop: 26,
    marginLeft: 65,
    marginRight: 65
  },
  counter: {
    color: "white",
    padding: 10,
    fontSize: 230,
    textAlign: "center",
    fontWeight: "bold"
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 3,
    marginTop: 10
  },
  buttonGroup: {
    marginTop: 20
  },
  decreaseButton: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "red"
  },
  incrementButton: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "green"
  }
});
