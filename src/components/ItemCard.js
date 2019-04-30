import React from 'react';
import Card from 'react-bootstrap/Card';

const ItemCard = ( { id, name, price } ) => {
    return (
        <Card key={ id }>
            <Card.Body>
                <Card.Title>
                    { name }
                </Card.Title>
                <Card.Text>
                    { price }
                </Card.Text>
            </Card.Body>       
        </Card>  
    ) 
}

export default ItemCard;