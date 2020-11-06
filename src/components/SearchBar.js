import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <h3>Search</h3>
        <input type="text" value={this.props.search} onChange={this.props.handleChange} placeholder="search"/>
        <label name="onStock"> Only show products on stock
          <input type="checkbox" name="onStock" value={this.props.onStock} onChange={this.props.onChangeStock} />
          </label>
      </>
    )
  }
}


export default SearchBar;