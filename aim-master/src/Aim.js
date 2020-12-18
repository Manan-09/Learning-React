import React from "react";
import ReactDOM from "react-dom";
import Row from "./Row.js";

class Aim extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 305,
      yscore: 0,
      hscore: 0,
      heads: [[], [], [], [], [], []]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const seconds = this.state.timer;
      if (seconds > 0) {
        this.setState(({ timer }) => ({
          timer: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (this.state.hscore < this.state.yscore)
          this.state.hscore = this.state.yscore;

        alert(
          "Your Score Was: " +
            this.state.yscore +
            "\nHigh Score is:  " +
            this.state.hscore
        );
        if (confirm("Press OK to play again!")) {
          this.setState(() => {
            this.state.timer = 305;
            this.state.yscore = 0;
            for (let i = 0; i < 6; i++) {
              this.state.heads[i] = [0, 0, 0, 0, 0, 0, 0, 0];
              const j = Math.floor(Math.random() * 8);
              this.state.heads[i][j] = 1;
            }
          });
        } else clearInterval(this.myInterval);
      }
    }, 100);
    this.setState(() => {
      for (let i = 0; i < 6; i++) {
        this.state.heads[i] = [0, 0, 0, 0, 0, 0, 0, 0];
        const j = Math.floor(Math.random() * 8);
        this.state.heads[i][j] = 1;
      }
    });
  }

  handleClick(i) {
    const temp = [0, 0, 0, 0, 0, 0, 0, 0];
    const tem = this.state.yscore;
    const j = Math.floor(Math.random() * 8);
    temp[j] = 1;
    this.setState(() => {
      this.state.heads[i] = temp;
      this.state.yscore = tem + 1;
    });
  }
  render() {
    return (
      <div className="Aim">
        <div className="middle">
          <Row
            num={0}
            row={this.state.heads[0]}
            handleClick={this.handleClick}
          />
          <Row
            num={1}
            row={this.state.heads[1]}
            handleClick={this.handleClick}
          />
          <Row
            num={2}
            row={this.state.heads[2]}
            handleClick={this.handleClick}
          />
          <Row
            num={3}
            row={this.state.heads[3]}
            handleClick={this.handleClick}
          />
          <Row
            num={4}
            row={this.state.heads[4]}
            handleClick={this.handleClick}
          />
          <Row
            num={5}
            row={this.state.heads[5]}
            handleClick={this.handleClick}
          />
        </div>
        <div className="side">
          <h5>Time Left</h5>
          <h4>{Math.floor(this.state.timer / 10)}</h4>
          <h5>Your Score</h5>
          <h4>{this.state.yscore}</h4>
          <h5>High Score</h5>
          <h4>{this.state.hscore}</h4>
        </div>
      </div>
    );
  }
}
export default Aim;
