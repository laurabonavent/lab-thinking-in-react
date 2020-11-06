import React from "react";
import ProductRow from "./ProductRow"


class ProductTable extends React.Component {
  render() {
    return (
      <>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => {
              return (
                <tr key={index}>
                  <ProductRow product={product} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}


export default ProductTable;