import React from "react";

export default class Hover extends React.Component {
  render() {
    console.log("Hover props", this.props);
    return (
      <div>
        <span onMouseOver={this.props.increment}>Hovered {this.props.count} times</span>
      </div>
    );
  }
}