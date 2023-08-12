import React from "react";

class TimeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>time: {new Date().toLocaleTimeString()}</h1>
        <p>hello, good night {this.props.name}</p>
      </div>
    );
  }
}

export default TimeClass;
