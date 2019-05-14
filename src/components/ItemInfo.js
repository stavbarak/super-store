import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { fetchDataItem } from '../redux/actions';


class ItemInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTabContent: null        }
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        const { fetchDataItem } = this.props;
        fetchDataItem(id);
    }

    switchTab(selectedKey) {
        this.setState({
            activeTabContent: selectedKey        })
    }

    render() {
        const { activeTabContent } = this.state;
        const { currentItem } = this.props;
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

}

const mapStateToProps = (state) => ({
    currentItem: state.currentItem
  })

  const mapDispatchToProps = dispatch => ({
    fetchDataItem: (id) => dispatch(fetchDataItem(id))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (ItemInfo)