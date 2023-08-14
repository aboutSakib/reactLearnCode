import React from "react";

class TimeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      local: "en-US",
    };
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.trick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  trick() {
    this.setState({ date: new Date() });
  }

  clickHere = (str) => {
    // console.log(str, " ", int);
    this.setState({
      local: str,
    });

    // alert("hello sir ,,good Morning");
  };

  render() {
    const { local } = this.state;
    let op = "bn-BD";
    let localText = "এখানে ক্লিক করুন";

    if (local === "bn-BD") {
      op = "en-US";
      localText = "এখানে ক্লিক করুন";
    } else {
      op = "bn-BD";
      localText = "Click Here";
    }
    return (
      <div>
        <h1>time: {new Date().toLocaleTimeString(local)}</h1>
        <button onClick={() => this.clickHere(op)}>{localText}</button>

        {/* {this.props.name.map((i, arr) => (
          <p a={arr}>{i}</p>
        ))} */}
      </div>
    );
  }
}

export default TimeClass;
