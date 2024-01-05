import React from 'react'
import "./product.css"

function Product(props) {
  return (
    <div className={props.className}>
      <hr />
      <h3 className={props.header}>{props.id}. Product Name</h3>
      <p>{props.productName}</p>
    </div>
  )
}

export default Product