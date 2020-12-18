import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Footer(props) {
  let min = Math.floor(props.minstoread);
  let sec = Math.ceil((props.minstoread - min) * 60);
  return (
    <div className="footer">
      <div className="info">
        <h3>Characters</h3>
        <h2>{props.chars}</h2>
      </div>
      <div className="info">
        <h3>Words</h3>
        <h2>{props.words}</h2>
      </div>

      <div className="info">
        <h3>Time to Read</h3>
        <h2>
          {min}m {sec}s
        </h2>
      </div>
    </div>
  );
}

export default Footer;
