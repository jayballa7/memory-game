import React, {useState} from 'react';
import './styles.css';
import Tile from '../Tile/index.js';
import cardImages from '../Faces/index.js';
import controller from '../../img/controller.png';

function Game () {

    const FACE_UP = 1;
    const FACE_DOWN = 2;

    
    const cardClick = (id) => {
        setTileCards(tileCards => tileCards.map( (tileCard, index) => id !== index ? tileCard : {
            orientation: FACE_UP,
            cardImage: cardImages[id]
        } ));

        const faceUpCards = tileCards.filter(tileCard => tileCard.orientation === FACE_UP);
        if( faceUpCards.length > 0 ) {
            if(faceUpCards[0].cardImage === cardImages[id]) {
                
                // match
            } else {
                setTimeout(() => {
                    setTileCards(getInitialState());
                }, 1000);
            }
        }
        

    }


    const getInitialState = () => {
        let initialState = [];
        
        for(let i = 0; i < 20; i++) {
            initialState.push({
                matched: false,
                orientation: FACE_DOWN,
                cardImage: controller
            });    
        }

        return initialState;
    };

    let [tileCards, setTileCards] = useState(getInitialState());

    return (
        <div className = "game-wrapper">
            <div className = "tiles-div">
                {tileCards.map((tileCard, index) => 
                    <Tile key = {index} id = {index} image = {tileCard.cardImage} cardClick = {cardClick}/> 
                )}
            </div>
        </div>
    )
}

export default Game;