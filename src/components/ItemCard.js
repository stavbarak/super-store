import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ( { name, price, image, id } ) => {
    return (
        <Card>           
            <Card.Header>
                <Card.Img src={ image } alt="Card image" />
            </Card.Header>
            <Card.Body>
                <Link to={`${id}`} >
                    <Card.Title>
                        { name }
                    </Card.Title>
                </Link> 
                <Card.Text>
                    { price }
                </Card.Text>
            </Card.Body>             
        </Card>      
    ) 
}

export default ItemCard;