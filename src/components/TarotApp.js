import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';
import axios from 'axios';

class TarotApp extends Component {
    state = {
        cartas: []
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
                console.log(res.data.cards)
                this.createCards(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    createCards = (cards) => {
        console.log(cards)
    }

    render() {
    return (
        <div className="App">
            <Header />
            <Cards />
        </div>
    );
    }
}

export default TarotApp;
