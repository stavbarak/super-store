import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
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

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const FETCH_URL = 'http://www.mocky.io/v2/5ccf3f8f300000ce1652c4bc';
        fetch(FETCH_URL, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
        const currentItem = json.find((element) => {
            return element.id === id ;
            });
          this.setState({
            currentItem: currentItem,
            loaded: true
          })
        })
        .catch(err => {
              console.log(err)
          })
    }

    render() {
        const { currentItem } = this.state;
        //console.log(this.state.currentItem)
        return (
            <Card>           
            <Card.Header>
                {currentItem ? <Card.Img src={ currentItem.image } alt="Card image" /> : ''}               
            </Card.Header>
            <Card.Body>
                {currentItem ? <Card.Title>{ currentItem.name }</Card.Title> : ''}

                {/* // bootstrap nav example - no data */}
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Stuff</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">More stuff</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">More</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Even more</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Body>             
        </Card>  
 
        ) 
    }

}

export default ItemInfo;