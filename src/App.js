import React, { Component } from 'react';
// import Click2 from "./Components/click2";
// import Hover2 from "./Components/hover2";
// import Counter1 from "./Components/counter1";
// import hoc from './Components/counter2';
import Header1 from "./Components/header1";
import Body1 from "./Components/body1";
// import RPBackground from "./Components/rpbackground";

class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        {/* <Counter1 renderDom={(count, increment) => <Click1 count={count} increment={increment} />} /> */}
        {/* <Counter1 renderDom={(count, increment) => <Hover1 count={count} increment={increment} />} /> */}
        {/* <Counter1>
          {
            (count, increment) => <Click1 count={count} increment={increment} />
          }
        </Counter1>
        <Counter1>
          {
            (count, increment) => <Hover1 count={count} increment={increment} />
          }
        </Counter1> */}
        {/* <Click2 /> */}
        {/* <Hover2 /> */}
        <Header1 name="Aditya" />
        <Body1 name="Aditya" />
        {/* <RPBackground render={(styles) => <Header1 styles={styles} />} /> */}
        {/* <RPBackground render={(styles) => <Body1 styles={styles} />} /> */}
      </div>
    );
  }
}

export default App;

// Rednder props
// clck1
// hover1
// counter1 -> click1
// counter1 -> hover1

// hoc
// click2
// hover2

// connect(mapS, map)(App)