import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredProductTable from "./components/FilteredProductTable"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <>
        <h1>IronStore</h1>
        <FilteredProductTable products={data} />
      </>
    </div>
  );
}

export default App;
