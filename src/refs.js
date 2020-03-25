import React from "react";

class RefPractice extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (el) => {
      this.cbRef = el;
    }
  }
  
  componentDidMount = () => {
    console.log(this.inputRef, this.cbRef);
    this.inputRef.current.focus();
    this.cbRef.focus();
  }

  handleChange = () => {
    console.log(this.inputRef.current.value);
  }

  handleChange1 = () => {
    console.log(this.cbRef.value);
  }

  render() {
    return (
      <React.Fragment>
        <input ref={this.inputRef} onChange={this.handleChange} />
        <input ref={this.setCbRef} onChange={this.handleChange1} />
      </React.Fragment>
    );
  }
}

// function RefPractice(props) {
//   // textInput must be declared here so the ref callback can refer to it
//   let textInput = null;

//   function handleClick() {
//     textInput.focus();
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         ref={(input) => { textInput = input; }} />
//       <input
//         type="button"
//         value="Focus the text input"
//         onClick={handleClick}
//       />
//     </div>
//   );  
// }


export default RefPractice;
