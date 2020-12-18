import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./Header.js";
import Aim from "./Aim.js";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Aim />
      </div>
    );
  }
}

export default App;
