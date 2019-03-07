import React from 'react';
import Modal from 'react-modal';

const ModalCard = (props) => (
    <Modal
        isOpen={!!props.selectedCard}
        contentLabel="Selected Option"
        onRequestClose={props.handleModalClose}
        closeTimeoutMS={200}
        className="card-modal"
        ariaHideApp={false}
    >
        {props.selectedCard && <h3>{props.selectedCard.name}</h3>}
        {props.selectedCard && <img src={props.imgFrontUrl + props.selectedCard.image} />}
    </Modal>
)

export default ModalCard
