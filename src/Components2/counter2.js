import React from "react";

const hoc = (OldComponent) => {
  class NewComponent extends React.Component {
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
        <OldComponent count={this.state.count} increment={this.increment} />
      );
    }
  }
  return NewComponent;
}

export default hoc;
