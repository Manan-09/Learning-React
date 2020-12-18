import React from "react";
import ReactDOM from "react-dom";

function Contact(props) {
  if (props.hasOwnProperty("question")) {
    return (
      <div className="contact">
        <p>Question : {props.question}</p>
        <p>Punchline : {props.punchline}</p>
      </div>
    );
  } else {
    return (
      <div className="contact">
        <p>Joke : {props.punchline}</p>
      </div>
    );
  }
}

export default Contact;
