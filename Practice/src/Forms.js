import React from "react";
import "./styles.css";
class Forms extends React.Component {

  constructor()
  {
    super()
    this.state={
      firstName:"",
      lastName:"",
      isFree:false,
      gender:"",
      favColor:"blue"
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(event){
    const {name,value,type,checked}=event.target
    type === "checkbox" ?
    this.setState({
      [name]:checked
    }):
    this.setState({
      [name]:value
    })
  }

  handleSubmit()
  {
    alert("Thanks for filling form!!!")
  }

  render(){
    const styles = {
      background:this.state.favColor,
    }
    return (

      <form style={styles} onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
        <br/>
        <textarea placeholder="Description" />
        <br/>
        <label>
        <input 
            type="checkbox" 
            name="isFree"
            checked={this.state.isFree}
            onChange={this.handleChange}
        />Are you free?</label>
        <br/>
        <label>
        <input 
            type="radio" 
            name="gender"
            value="Male"
            onChange={this.handleChange}
        />Male</label>
        <br/>
        <label>
        <input 
            type="radio" 
            name="gender"
            value="Female"
            onChange={this.handleChange}
        />Female</label>
      <br/>
      <h2>You are {this.state.gender}</h2>
      <label>
      <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
        <option value="blue" selected>Blue</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select> Background?</label>
      <br/>
      <button>Submit</button>
      </form>
    )
  }
}

export default Forms