import React from 'react';
import Card from './Card';


const ResultsList = ({ listOfResults }) => {
    let resultItem = listOfResults.map((item, i) => {
        return (
            <div key={(i)}>
                <div>
                    { item.name }
                </div>
                <div>
                    { item.price }
                </div>
            </div>         
        )
    });

    return (
        <div>
            { resultItem }
        </div>
    )
}


export default ResultsList;