import React from 'react';
import Card from './Card';

const Cards = (props) => (
    <div className="cards__container">
        {props.cards.map( (card, index) =>
            <Card
                key={index}
                card={card}
                imgBackUrl={props.imgBackUrl}
                imgFrontUrl={props.imgFrontUrl + card.image}
                backCardShow={props.backCardShow}
                handleClickCard={props.handleClickCard}
            />
        )}
    </div>
)

export default Cards
