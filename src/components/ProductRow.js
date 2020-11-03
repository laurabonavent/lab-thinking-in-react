import React from 'react';


class ProductRow extends React.Component {
  render() {
    return <>
      <td>{this.props.product.name}</td>
      <td>{this.props.product.price}</td>

    </>;
  }
}

export default ProductRow;
