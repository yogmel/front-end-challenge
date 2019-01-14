import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';
import axios from 'axios';

class TarotApp extends Component {
    state = {
        cards: [],
        imgFrontUrl: '',
        imgBackUrl: ''
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

    createCards = (cards) => {
        console.log(cards)
        return (
            <div className="cards__container">
                {this.state.cards.map( cards =>
                    <div className="card__box">
                        <img src={this.state.imgBackUrl} className="card card__back hide"></img>
                        <img src={this.state.imgFrontUrl + cards.image} className="card card__front"></img>
                    </div>
                )}
            </div>
        )
    }

    render() {
    return (
        <div className="App">
            <Header />
            <Cards />
            {this.createCards()}
        </div>
    );
    }
}

export default TarotApp;
