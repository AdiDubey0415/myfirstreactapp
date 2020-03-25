import React from "react";

const changeBackground = (WrappedComponent) => {
  class ChangeBackground extends React.Component {
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
      return (
        <WrappedComponent {...this.props} styles={this.state.styles} />
      );
    }
  }
  return ChangeBackground;
}

export default changeBackground;
