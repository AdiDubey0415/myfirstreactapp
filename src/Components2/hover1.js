import React from "react";

class Hover1 extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <span onMouseOver={this.increment}>Hovered {this.state.count} times</span>
    );
  }
}

export default Hover1;
