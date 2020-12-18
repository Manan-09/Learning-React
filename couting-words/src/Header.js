import React from "react";
import ReactDOM from "react-dom";
import { FaCopy } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import "./styles.css";

function Header(props) {
  return (
    <div className="header">
      <h3>Counting Words</h3>
      <div className="action">
        <button onClick={() => props.handleCopy()}>
          <FaCopy /> Copy
        </button>
        <p>...Type what you are thinking!</p>
        <button onClick={() => props.handleClear()}>
          <GrClear /> Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
