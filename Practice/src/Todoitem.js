import React from "react";
import ReactDOM from "react-dom";

function Todoitem(props) {
  const completestle={
    fontStyle: "italic" ,
    textDecoration: "line-through"
  }
  return (
    <div className="todoitem">
      <input type="checkbox" checked={props.items.complete} onChange={() => props.handleChange(props.items.id)} />
      <h3 style={props.items.complete?completestle:null}>{props.items.text}</h3>
    </div>
  );
}
export default Todoitem;
