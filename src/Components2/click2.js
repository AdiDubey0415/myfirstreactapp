import React from "react";
import hoc from "./counter2";

class Click2 extends React.Component {
  render() {
    console.log("Click2 props", this.props);
    return (
      <button onClick={this.props.increment}>Clicked {this.props.count} times</button>
    );
  }
}

export default hoc(Click2);
// export default Click2;

// parent(A, B, C)
// parent(A, B, D)
// A, B, C
// A, B, D
// Click(A, B, C)    Hover(D)

// HOC - Higher order Component
// function(function(){}) {
//   return function() {}
// }

// Component(oldcomponent) {
//   return Newcomponent
// }