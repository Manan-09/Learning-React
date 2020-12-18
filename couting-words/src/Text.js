import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";

class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      char: 0,
      word: 0,
      mintoread: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange(event) {
    let val = event.target.value;
    console.log(val);
    chars = 0;
    words = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === " ") {
        words++;
        while (val[i] === " ") i++;
        i--;
      } else chars++;
    }
    if (val.length > 0 && val[val.length - 1] != " ") words++;
    minstoread = Math.ceil(words * 0.005 * 100) / 100;

    this.setState({
      value: val,
      char: chars,
      word: words,
      mintoread: minstoread
    });
  }

  handleClear() {
    this.setState({ value: "", char: 0, word: 0, mintoread: 0 });
  }

  handleCopy() {
    if (this.state.value.length == 0) alert("Nothing to copy :(");
    else {
      this.textArea.select();
      document.execCommand("copy");
      alert("Your thoughts are copied :)");
    }
  }
  render() {
    return (
      <div className="text">
        <Header handleClear={this.handleClear} handleCopy={this.handleCopy} />
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              placeholder="Write your thoughts here."
              className="area"
              value={this.state.value}
              onChange={this.handleChange}
              ref={(textarea) => (this.textArea = textarea)}
            />
          </label>
        </form>
        <Footer
          chars={this.state.char}
          words={this.state.word}
          minstoread={this.state.mintoread}
        />
      </div>
    );
  }
}

export default Text;
