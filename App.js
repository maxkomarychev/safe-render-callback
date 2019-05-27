import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyComponent from "./MyComponent";

export default class App extends React.Component {
  state = {
    renders: 1
  };
  increment = () => {
    this.setState(({ renders }) => ({ renders: renders + 1 }));
  };
  renderMemberArrow = () => {
    return <Text>Content as inline arrow</Text>;
  };
  render() {
    const { renders } = this.state;
    return (
      <View style={styles.container}>
        <Text>Parent renders: {renders}</Text>
        <Button title="Render parent" onPress={this.increment} />
        <MyComponent
          renderContent={() => <Text>Content as inline arrow</Text>}
        />
        <MyComponent renderContent={<Text>Content as element</Text>} />
        <MyComponent renderContent={this.renderMemberArrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
