import { useState } from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion";

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
            className="flex flex-col justify-end items-center h-64 w-40 mr-8 p-4 bg-gray-800 rounded-lg shadow-xs text-white"
        >
            <span className="text-xs uppercase font-extrabold">{cardData.country}</span>
            <h2 className="text-3xl font-medium">{cardData.city}</h2>
        </Card>
    )
}

export default DiscoverCard;