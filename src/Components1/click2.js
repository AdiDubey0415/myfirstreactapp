import React from "react";
import withCounter from "./counter2";

class Click2 extends React.Component {
  render() {
    console.log("Click2 props", this.props);
    return (
      <div>
        <button onClick={this.props.increment}>Clicked {this.props.count} times</button>
      </div>
    );
  }
}

export default withCounter(Click2);
