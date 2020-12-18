import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Row(props) {
  const list = props.row.map((item) => {
    if (item === 1) {
      return (
        <button
          className="button2"
          onClick={() => props.handleClick(props.num)}
        ></button>
      );
    } else {
      return <button className="button1"></button>;
    }
  });
  return <div className="Row">{list}</div>;
}
export default Row;
