import React from "react";

class Click1 extends React.Component {
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
      <button onClick={this.increment}>Clicked {this.state.count} times</button>
    );
  }
}

export default Click1;

// parent(A, B, C)
// parent(A, B, D)

// Click(A, B, C)    Hover(A, B, D)