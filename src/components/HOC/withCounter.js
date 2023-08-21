import React from "react";

const withCounter = (MainComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    incrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      return (
        <MainComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }
  return NewComponent;
};
export default withCounter;
