import React from "react";
import ReactDOM from "react-dom";
import Todoitem from "./Todoitem.js";
import TodoData from "./TodoData.js";
import Contact from "./Contact.js";
import Product from "./Product.js";
import ProductData from "./ProductData.js";

import "./styles.css";

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) { 
    const uptoDo = this.state.toDo
        uptoDo.filter((todo) => 
        {
          if(todo.id === id)
          {
            todo.complete = !todo.complete
          }
          return todo
        })
       
    this.setState(() => {
      return {
        todo: uptoDo
      }
    })

  }

  render() {
    const doList = this.state.toDo.map((Items) => (
      <Todoitem key={Items.id} items={Items} handleChange={this.handleChange} />
    ))
    return (
      <div className="todolist">
        <h2>To-do List</h2>
        {doList}
      </div>
    );
  }
}
export default Todolist;
