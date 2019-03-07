import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';
import ModalCard from './ModalCard';
import ShuffleButton from './ShuffleButton';
import axios from 'axios';

class TarotApp extends Component {
    state = {
        cards: [],
        selectedCard: undefined,
        imgFrontUrl: '',
        imgBackUrl: '',
        backCardShow: false
    }

    componentDidMount() {
        try {
            console.log('app iniciado')
            this.retrieveCards();
        } catch (e) {
            console.log(e);
        }
    }

    retrieveCards = () => {
        axios.get("https://raw.githubusercontent.com/yogmel/front-end-challenge/master/tarot.json")
            .then((res) => {
                const imgFrontUrl = res.data.imagesUrl;
                const imgBackUrl = res.data.imageBackCard;
                const cards = res.data.cards.map( obj => obj );
                this.setState({ cards, imgFrontUrl, imgBackUrl });
            })
            .catch((e) => {
                console.log(e)
            })
    }

    handleBegin = () => {
        this.setState( () => ({ backCardShow: true }) );
    }

    handleClickCard = (cardToSee) => {
        console.log('card clicked' + cardToSee);
        this.setState(() => ({ selectedCard: cardToSee }))
        console.log(this.state.selectedCard)
    }

    handleModalClose = () => {
        this.setState(() => ({selectedCard: undefined}))
    }

    render() {
    return (
        <div className="App">
            <Header />
            <Cards
                cards={this.state.cards}
                imgBackUrl={this.state.imgBackUrl}
                imgFrontUrl={this.state.imgFrontUrl}
                backCardShow={this.state.backCardShow}
                handleClickCard={this.handleClickCard}
            />
            <ShuffleButton handleClick={this.handleBegin} />

            <ModalCard
                imgFrontUrl={this.state.imgFrontUrl}
                selectedCard={this.state.selectedCard}
                handleModalClose={this.handleModalClose}
            />
        </div>
    );
    }
}

export default TarotApp;
