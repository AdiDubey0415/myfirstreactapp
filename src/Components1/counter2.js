// HOC(wrappedComponent) => NewComponent
import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
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
        <WrappedComponent name="Aditya" count={this.state.count} increment={this.increment} />
      );
    }
  }
  return WithCounter;
}

export default withCounter;
