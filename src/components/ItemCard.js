import React from 'react';
import Card from 'react-bootstrap/Card';

const ItemCard = ( { id, name, price } ) => {
    return (
        <Card>
            <Card.Header>
                 <Card.Img src={`https://loremflickr.com/320/240?random=${id}`} alt="Card image" />
            </Card.Header>
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