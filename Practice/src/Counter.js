import React from "react"


class Counter extends React.Component {
  constructor() {
      super()
      this.state = {
        loading: true,
        count: 0
      }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    setTimeout(() => { this.setState({
        loading: false,
        count: 0
      })
    },1000)
  }

  handleClick() {
    this.setState(prevstate => {
      return {
        loading:false ,
        count: prevstate.count+1
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.loading ?
        <h1>Loading the Counter</h1> :
        <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increase</button>
        </div>
        }
      </div>
    )
  }
}

export default Counter