import React from 'react';

const Card = (props) => (
    <div className="card__box"
        onClick={(e) => {
            props.handleClickCard(props.card)
        }}
    >
        <img src={props.imgBackUrl} className={"card card__back " + (props.backCardShow ? '' : 'hide' )} alt="" ></img>
        <img src={props.imgFrontUrl} className={"card card__front " + (props.backCardShow ? 'hide' : '' )} alt=""></img>
    </div>
)

export default Card;
