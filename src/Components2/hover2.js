import React from "react";
import hoc from "./counter2";

class Hover2 extends React.Component {
  render() {
    return (
      <span onMouseOver={this.props.increment}>Hovered {this.props.count} times</span>
    );
  }
}

export default hoc(Hover2);
