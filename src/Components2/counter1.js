import React from "react";

class Counter1 extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log("PRops", this.props.children);
    return (
      <div>
        {/* { this.props.renderDom(this.state.count, this.increment) } */}
        { this.props.children(this.state.count, this.increment) }
      </div>
    );
  }
}

export default Counter1;
