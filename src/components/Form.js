import React from "react";

class Form extends React.Component {
  state = {
    nameInput: "hello",
    op: "please chose your number",
  };
  changeInput = (e) => {
    if (e.target.type === "text") {
      this.setState({
        nameInput: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        op: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={this.state.nameInput}
            onChange={this.changeInput}
          />

          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <h1>{this.state.nameInput}</h1>
        </form>
      </div>
    );
  }
}
export default Form;
