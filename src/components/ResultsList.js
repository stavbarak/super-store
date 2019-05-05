import React from 'react';
import ItemCard from './ItemCard';
import CardColumns from 'react-bootstrap/CardColumns';


const ResultsList = ({ listOfResults }) => {
    let resultItem = listOfResults.map((item, i) => {
        return (   
            <ItemCard 
            key= {(i)} 
            id={ item.id } 
            image={ item.image } 
            name={ item.name } 
            price={ item.price } 
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