import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { fetchDataItem, switchTab, clearDataItem } from '../redux/actions';

class ItemInfo extends Component {

    componentDidMount = () => {
        const { id, tab } = this.props.match.params;
        /* for the deep linking to work I'm using the tab param on first mounting */
        const { fetchDataItem, switchTab } = this.props;
        switchTab(tab);
        fetchDataItem(id);
    }

    componentWillUnmount = () => {
        const { clearDataItem } = this.props;
        clearDataItem();
    }

    switchTab(selectedKey) {
        const { switchTab } = this.props;
        switchTab(selectedKey);
        this.props.history.push(`${selectedKey}`)
    }

    render() {
        const { currentItem, currentTab } = this.props;
        const { id } = this.props.match.params;
        if(currentItem) {
            return (
                <Card className="item-info col-md-8">           
                <Card.Header>
                   <Card.Img src={ currentItem.image.imageUrl } alt="Card image" />         
                </Card.Header>
                <Card.Body>
                    <Card.Title>{ currentItem.title }</Card.Title>
                    <Nav fill activeKey={`${id}/specs`} onSelect={selectedKey => this.switchTab(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="description">Description</Nav.Link>
                        </Nav.Item>                     
                        <Nav.Item>
                             <Nav.Link eventKey="specs">Specs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="shipping">Shipping</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body> 
                <Card.Body>
                    <Card.Text>
                        {currentItem[`${currentTab}`]}
                    </Card.Text>
                </Card.Body>    
                <Button href={currentItem.itemWebUrl} className="buy-btn">Buy Now</Button>         
            </Card>
           )
        } else return null;

    }

}

const mapStateToProps = (state) => ({
    currentItem: state.currentItem,
    currentTab: state.currentTab
  })

  const mapDispatchToProps = dispatch => ({
    fetchDataItem: (id) => dispatch(fetchDataItem(id)),
    switchTab: (tab) => dispatch(switchTab(tab)),
    clearDataItem: () => dispatch(clearDataItem())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (ItemInfo)