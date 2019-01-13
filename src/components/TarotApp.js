import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';

class TarotApp extends Component {
    state = {
        cartas: []
    }

    componentDidMount(){
        try {
            this.retrieveCards();
        } catch (e) {
            console.log(e);
        }
    }

    retrieveCards = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", "https://raw.githubusercontent.com/yogmel/front-end-challenge/master/tarot.json", true);
        xhttp.send();
    }

    createCards = () => {

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
