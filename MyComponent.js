import React from "react";
import { Text, View } from "react-native";

export default class MyComponent extends React.PureComponent {
  renders = 0;
  renderContent = () => {
    const { renderContent } = this.props;
    if (typeof renderContent === "function") {
      return renderContent();
    } else if (React.isValidElement(renderContent)) {
      return renderContent;
    }
  };
  render() {
    this.renders += 1;
    return (
      <View>
        <Text>Renders #: {this.renders}</Text>
        {this.renderContent()}
      </View>
    );
  }
}
