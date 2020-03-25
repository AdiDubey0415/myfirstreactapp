import React from "react";

const withBackground = (WrappedComponent) => {
  class WrapperComponent extends React.Component {
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
      console.log("HOC props", this.props);
      return (
        <WrappedComponent {...this.props} styles={this.state.styles} />
      );
    }
  }
  return WrapperComponent;
}

export default withBackground;
