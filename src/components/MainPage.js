import React, { Component } from 'react';
import {InputGroup, FormControl }from 'react-bootstrap';
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

    componentDidMount = () => {
        const FETCH_URL = 'http://www.mocky.io/v2/5ccf3f8f300000ce1652c4bc';
        fetch(FETCH_URL, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
          this.setState({
            data: json,
            loaded: true
          })
        })
        .catch(err => {
              console.log(err)
          })
    }

    handleSearchChange = (evt) => {
        this.setState({ query: evt.target.value })
    }

    filterData = (data, query) => {
        const q = query.toLowerCase();
        if (data) {
            return data.filter (
                d => d.name.toLowerCase().indexOf(q) >-1
            )
        }
        
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
                        onChange = {this.handleSearchChange}
                        />
                    </InputGroup>
                </div>
                {loaded ? <ResultsList listOfResults={ filteredData }/> : ''}
            </div>
        )
    }
}

export default MainPage;