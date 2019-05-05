import React, { Component }  from 'react';
// import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import { getItems, getSpecificItem } from '../api';

class ItemInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentItem: null
        }
    }

    componentDidMount = async () => {
        
        // TODO: either use a real API and make another call here with the id on the same data, 
        // or save the data to redux so this component can access it too.

        // const { id } = this.props.match.params;
        // const currentItem = await getSpecificItem(id);
        // this.setState({ currentItem })
        // console.log(currentItem)
    }

    render() {
        return (
            // bootstrap nav example
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        ) 
    }

}

export default ItemInfo;