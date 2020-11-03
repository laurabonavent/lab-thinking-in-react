import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilteredProductTable extends React.Component {
  render() {
    return (
      <>
        <SearchBar products={this.props.products.data} />
        <ProductTable products={this.props.products.data}/>
      </>
    )
  }
}

export default FilteredProductTable;