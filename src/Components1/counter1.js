import React from "react";

export default class Counter extends React.Component {
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
      <div>
        {/* <button onClick={this.increment}>Clicked {this.state.count} times</button> */}
        { this.props.abc(this.state.count, this.increment) }
      </div>
    );
  }
}