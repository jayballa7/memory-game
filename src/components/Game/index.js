import React, {Component} from 'react';
import './styles.css';
import Tile from '../Tile/index.js';
import controller from '../../img/controller.png';
import donkeykong from '../../img/donkeykong.jpg';
import mario from '../../img/mario.jpg';
import banjo from '../../img/banjo.jpg';
import zelda from '../../img/zelda.png';
import diddykong from '../../img/diddykong.jpg';
import sonic from '../../img/sonic.jpg';
import pacman from '../../img/pacman.png';
import luigi from '../../img/luigi.jpg';
import yoshi from '../../img/yoshi.jpg';
import link from '../../img/link.jpg';

class Game extends Component {
    render() {

        var oneTile = function(key, image) {
            this.key = key;
            this.image = image;
            this.isFaceUp = false;
        };

        oneTile.prototype.draw = function() {
            if (this.isFaceUp) {
                return this.image = selected[j];
            } else {
                return this.image = controller;
            }
        };

        var faces = [
            donkeykong,
            mario,
            banjo,
            zelda,
            diddykong,
            sonic,
            pacman,
            luigi,
            yoshi,
            link
        ];

    // Make an array which has 2 of each, then randomize it
        var selected = [];
            for (var i = 0; i < 10; i++) {
            // Randomly pick one from the array of remaining faces
            var randomInd = Math.floor(Math.random(faces.length));
            var tileImage = faces[randomInd];
            // Push 2 copies onto array
            selected.push(tileImage);
            selected.push(tileImage);
            // Remove from array
            faces.splice(randomInd, 1);
        }


// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

        var tiles = [];

        for(var j = 0; j < 20; j++) {
                var tileKey = j;
                var tileFace = selected;
                tiles.push(new oneTile(tileKey, tileFace));
                tiles[j].isFaceUp = true;
                tiles[j].draw();
        }


    return(
        <div className = "game-wrapper">
            <div className = "tiles-div">
                {tiles.map((data,index) => {
                    return (
                        <div className={"tiles-"+ index}>
                            <Tile 
                                image = {data.image}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
            }
}


export default Game;