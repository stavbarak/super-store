import React, { Component } from 'react';
import { InputGroup, FormControl }from 'react-bootstrap';
import { connect } from 'react-redux';
import ResultsList from './ResultsList';
import { fetchData } from '../redux/actions';


class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filteredData: [],
            query: ''
        }
    }

    componentDidMount = () => {              
        const { fetchData } = this.props;
        fetchData();
    }

    handleSearchChange = (evt) => {
        const { query } = this.state;
        const { data } = this.props;
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
                d => d.title.toLowerCase().indexOf(q) >-1
            )
        }      
    }

    render() {
        const { data, loaded } = this.props;
        const { filteredData, query } = this.state;
        console.log(data)
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

const mapStateToProps = (state) => ({
    data: state.data,
    loaded: state.loaded
  })

  const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (MainPage)