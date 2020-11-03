import React from "react";

class SearchBar extends React.Component {
  state = {
    searchWord: "",
    onStock:false
  }

  handleChange = (event) => {
    const value = event.target.value;
    const type = event.target.type;

    if (type === "checkbox") {
      value = event.target.checked
    }

    this.setState({
      searchWord : value
    })
  }

  render() {
    return (
      <>
        <h3>Search</h3>
        <input type="text" value={this.state.searchWord} onChange={this.handleChange} />
        <input type="checkbox" name="onStock" checked={this.state.onStock} onChange={this.handleChange}></input>
      </>
    )
  }
}


export default SearchBar;