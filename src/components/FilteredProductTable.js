import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilteredProductTable extends React.Component {
  state = {
    //items : this.props.products.data,
    filteredItems: [], 
    search: "", 
    onStock:false
  }

  // handleChange = (event) => {
  //   let lookedUpItem = event.target.value;
  //   let filteredResults = this.state.items.filter(item => (
  //     item.name.includes(lookedUpItem)
  //   ))
  //   this.setState({
  //     filteredItems: filteredResults,
  //     search:lookedUpItem
  //   })
  // }

  handleChange = (event) => {
    this.setState({
      search:event.target.value
    })
  }

  onChangeStock = () => {
    this.setState({
      onStock: !this.state.onStock
    })
  }





  render() {
    let products = this.props.products.data.filter((item) => {
      
      return item.name.toLowerCase().includes(this.state.search.toLowerCase()) /* && */;
    });
    return (
      <>
        <SearchBar
          search={this.state.search}
          handleChange={this.handleChange}
          onStock={this.state.onStock}
          onChangeStock ={this.onChangeStock}
        />
        <ProductTable products={products} />
      </>
    );
  }
}

export default FilteredProductTable;