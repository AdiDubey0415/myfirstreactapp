import React from "react";

class RefPractice extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    console.log("Here", this.inputRef);
    // this.cbRef = null;
    // this.setCbRef = (el) => {
    //   this.cbRef = el;
    // }
  }

  componentDidMount = () => {
    // document.getElementById("input").focus();
    this.inputRef.current.focus();
    // console.log(this.cbRef);
    // this.cbRef.focus();
  }

  handleChange = () => {
    console.log(this.inputRef.current.value);
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} onChange={this.handleChange} />
        {/* <input type="text" ref={this.setCbRef} /> */}
      </div>
    );
  }
}

export default RefPractice;
