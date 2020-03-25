import React from "react";

export default class Click extends React.Component {
  render() {
    console.log("Click props", this.props);
    return (
      <div>
        <button onClick={this.props.increment}>Clicked {this.props.count} times</button>
      </div>
    );
  }
}