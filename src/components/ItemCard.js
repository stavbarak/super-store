import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ( { name, image, id, price } ) => {
    return (
        <Card>           
            <Card.Header>
                <Card.Img src={ image } alt="Card image" />
            </Card.Header>
            <Card.Body>
                <Link to={`${id}/description`} >
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