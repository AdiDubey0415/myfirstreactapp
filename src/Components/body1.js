import React from "react";
import withBackground from "./hocbackground";

class Body1 extends React.Component {
  render() {
    console.log("Body1 props", this.props);
    return (
      <div style={this.props.styles}>
        Body1 - {this.props.styles.background}
      </div>
    );
  }
}

export default withBackground(Body1);


// P(1,2)

// A(1,2,3) C => D => E => B(1,2,4)