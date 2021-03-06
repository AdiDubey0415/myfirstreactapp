import React from "react";

export default class CB1 extends React.Component {
  state = {
    styles: {
      "height": "100px",
      "width": "100%",
      "border": "2px solid black"
    }
  }

  componentDidMount = () => {
    let self = this;
    setInterval(function() {
      let styles = {...self.state.styles};
      self.setState(prevState => ({
        styles: {...styles, "background": `#${Math.ceil(Math.random() * 1000000)}`}
      }));
    }, 2000);
  }

  render() {
    console.log("Click props", this.props);
    return (
      <div>
        { this.props.render(this.state.styles) }
      </div>
    );
  }
}