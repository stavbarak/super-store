import React, { Component } from 'react';
import {InputGroup, FormControl }from 'react-bootstrap';

import { getItems } from '../api';
import ResultsList from './ResultsList';


class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            query: '',
            loaded: false
        }
    }

    componentDidMount = async () => {
        const data = await getItems('');
        console.log(data)
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
        const { data, query, loaded } = this.state;
        const filteredData = this.filterData(data, query) || null;
        return (
            <div>               
                <div className="searchContainer">
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search for product"
                        aria-label="Search"
                        onChange = {(evt) => this.handleSearchChange(evt) }
                        />
                    </InputGroup>
                </div>
                {loaded ? <ResultsList listOfResults={ filteredData }/> : ''}
            </div>
        )
    }
}

export default MainPage;