import React from "react";
import withCounter from "./counter2";

class Hover2 extends React.Component {
  render() {
    console.log("Hover2 props", this.props);
    return (
      <div>
        <span onMouseOver={this.props.increment}>Hovered {this.props.count} times</span>
      </div>
    );
  }
}

export default withCounter(Hover2);
