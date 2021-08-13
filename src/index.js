import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from './searchBar';
import { ProductTable } from './table';

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(newFilterText){
    this.setState({
      filterText: newFilterText
    });
  }

  handleInStockOnlyChange(newInStockOnly) {
    this.setState({
      inStockOnly: newInStockOnly
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} 
                   inStockOnly={this.state.inStockOnly}
                   onFilterTextChange={this.handleFilterTextChange}
                   onInStockOnlyChange={this.handleInStockOnlyChange} />
        <ProductTable products={this.props.products} 
                      filterText={this.state.filterText} 
                      inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('app'));