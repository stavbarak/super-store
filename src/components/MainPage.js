import React, { Component } from 'react';
import { InputGroup, FormControl }from 'react-bootstrap';
import ResultsList from './ResultsList';


class MainPage extends Component {

    

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filteredData: [],
            query: '',
            loaded: false,
        }
    }

    componentDidMount = () => {       
        const FETCH_URL = 'http://www.mocky.io/v2/5cd864f4300000a22a74cda3';

        fetch(FETCH_URL, {
          method: 'GET',
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
        const { data, query } = this.state;
        const filteredData = this.filterData(data, query);
        this.setState({ 
            query: evt.target.value, 
            filteredData
        })
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
        const { data, filteredData, query, loaded } = this.state;
        let presentedData;
        if (loaded && query.length > 0) {
            presentedData = <ResultsList listOfResults={ filteredData }/>;
        } else if (loaded && !query.length > 0) {
            presentedData = <ResultsList listOfResults={ data }/>;
        } else {
            presentedData = null;
        }
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
                { presentedData }
            </div>
        )
    }
}

export default MainPage;