import React from "react";
import withBackground from "./hocbackground";

class Header1 extends React.Component {
  render() {
    console.log("Header1 props", this.props);
    return (
      <div style={this.props.styles}>
        Head - {this.props.styles.background}
      </div>
    );
  }
}

export default withBackground(Header1);
