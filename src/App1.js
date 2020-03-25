import React, { Component } from 'react';
// import Click from "./Components/click1";
// import Click2 from "./Components/click2";
// import Hover from "./Components/hover1";
// import Hover2 from "./Components/hover2";
// import Counter from "./Components/counter1";
// import Header1 from "./Components/header1";
// import Body1 from "./Components/body1";
// import Footer1 from "./Components/footer1";
// import CB1 from "./Components/changeBackground1";
// import Header2 from "./Components/header2";
// import Body2 from "./Components/body2";
// import Footer2 from "./Components/footer2";
// import CB1 from "./Components/changeBackground1";
import RefPractice from "./refs1.jsx";

class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        {/* <Counter abc={(count, increment) => <Click count={count} increment={increment} />} /> */}
        {/* <Counter abc={(count, increment) => <Hover count={count} increment={increment} />} /> */}
        {/* <Click2 /> */}
        {/* <Hover2 /> */}
        {/* <Header1 /> */}
        {/* <Body1 /> */}
        {/* <Footer1 /> */}
        {/* <CB1 render={ (styles) => <Header1 styles={styles} /> } /> */}
        {/* <CB1 render={ (styles) => <Body1 styles={styles} /> } /> */}
        {/* <CB1 render={ (styles) => <Footer1 styles={styles} /> } /> */}
        {/* <Header2 name="Aditya" /> */}
        {/* <Body2 name="Aditya" /> */}
        {/* <Footer2 name="Aditya" /> */}
        <RefPractice />
      </div>
    );
  }
}

export default App;
