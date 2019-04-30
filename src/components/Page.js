import React, { Component } from 'react';
import { getItems } from '../api';
import ResultsList from './ResultsList';


class Search extends Component {
    state = {
        data: [],
        query: '',
        loaded: false
    }

    componentDidMount = async () => {
        const data = await getItems('');
        this.setState({ data, loaded: true })
    }

    handleSearchChange = (evt) => {
        this.setState({ query: evt.target.value })
    }

    filterData = (data, query) => {
        const q = query.toLowerCase();
        return data.filter (
            d => d.name.indexOf(q) >-1
        )
    }

    render() {
        const { data, query } = this.state;
        
        
        const filteredData = this.filterData(data, query) || null;
        console.log(filteredData);
        return (
            <div>
                <input onChange = {(evt) => this.handleSearchChange(evt) } />
                {/* <button>Find</button> */}
                {this.state.loaded ? <ResultsList listOfResults={data}/> : ''}
            </div>
        )
    }
}

export default Search;