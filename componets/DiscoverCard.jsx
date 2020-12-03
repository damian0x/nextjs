import { useState } from 'react';
import styled from 'styled-components'
import React from 'react';

const Card = styled.div`
    background-position: center;
    background-size: cover;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${props => `${props.dynamicSrc}`});
`;

const DiscoverCard = ({cardData}) => {
    const [active, setActive] = useState(false);

    return (
        <Card 
            dynamicSrc={`./${cardData.photo}`} 
            className="custom-card"
        >
            <span className="custom-card__span">{cardData.country}</span>
            <h2 className="custom-card__h2">{cardData.city}</h2>
        </Card>
    )
}

export default DiscoverCard;