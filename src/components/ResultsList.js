import React from 'react';
import ItemCard from './ItemCard';
import CardColumns from 'react-bootstrap/CardColumns';


const ResultsList = ({ listOfResults }) => {
    let resultItem = listOfResults.map((item, i) => {
        return (   
            <ItemCard 
            key= {(i)} 
            id={ item.itemId } 
            image={ item.image.imageUrl } 
            name={ item.title } 
            price={ `${item.price.value} ${item.price.currency}` } 
            />   
        )
    });

    return (
        <CardColumns className="resultsList">
            { resultItem }
        </CardColumns>
    )
}


export default ResultsList;