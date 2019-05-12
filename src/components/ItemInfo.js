import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class ItemInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentItem: null,
            activeTabContent: null,
            firstActive: true
        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const FETCH_URL = 'http://www.mocky.io/v2/5cd864f4300000a22a74cda3';
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

    switchTab(selectedKey) {
        this.setState({
            activeTabContent: selectedKey,
            firstActive: false
        })
    }

    render() {
        const { currentItem, activeTabContent } = this.state;
        if(currentItem!==null) {
            return (
                <Card className="item-info col-md-8">           
                <Card.Header>
                   <Card.Img src={ currentItem.image } alt="Card image" />         
                </Card.Header>
                <Card.Body>
                    <Card.Title>{ currentItem.name }</Card.Title>
                        <Nav fill defaultActiveKey="#" onSelect={selectedKey => this.switchTab(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link  href="#" eventKey={ currentItem.Description }>Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={ currentItem.Specs }>Specs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={ currentItem.Shipping }>Shipping</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={ currentItem.Reviews }>Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body> 
                <Card.Body>
                    <Card.Text>
                    { activeTabContent || currentItem.Description }
                    </Card.Text>  
                </Card.Body>    
                <Button className="buy-btn">Buy Now</Button>         
            </Card>
           )
        }
        else {
            return null;
        }
    }

}

export default ItemInfo;