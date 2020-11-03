import React from "react";
import ProductRow from "./ProductRow"


class ProductTable extends React.Component {
  state = {
    products: this.props.products
  }


  render() {
    return (
      <>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
          {this.state.products.map((product, index) => {
            console.log("product 🚨", product)
          return(
            <tr key={index}><ProductRow product={product} /></tr>)})}
          </tbody>
        </table>
      </>
    )
  }
}


export default ProductTable;