import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    }

    handleFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    handleInStockOnlyChange(event) {
        this.props.onInStockOnlyChange(event.target.checked);
    }

    render() {
        return (
            <form>
                <input type="text" 
                       placeholder="Search..." 
                       value={this.props.filterText} 
                       onChange={this.handleFilterTextChange} />
                <p>
                    <input type="checkbox" 
                           checked={this.props.inStockOnly} 
                           onChange={this.handleInStockOnlyChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}