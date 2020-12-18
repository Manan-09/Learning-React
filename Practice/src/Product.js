import React from "react"
import ReactDOM from "react-dom"

function Product(prop)
{
  return (
    <div className="product">
      <h3>Name : {prop.products.name}</h3>
      <h3>Price : {prop.products.price}<span>&#8377;</span></h3>
      <h3>Description : {prop.products.description}</h3>
    </div>
  )
}
export default Product