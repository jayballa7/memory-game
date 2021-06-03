import React, {Component} from 'react';
import './styles.css';
import Tile from '../Tile/index.js';
// import controller from '../../img/controller.png';
// import donkeykong from '../../img/donkeykong.jpg';
// import mario from '../../img/mario.jpg';
// import banjo from '../../img/banjo.jpg';
// import zelda from '../../img/zelda.png';
// import diddykong from '../../img/diddykong.jpg';
// import sonic from '../../img/sonic.jpg';
// import pacman from '../../img/pacman.png';
// import luigi from '../../img/luigi.jpg';
// import yoshi from '../../img/yoshi.jpg';
// import link from '../../img/link.jpg';
// import faces from '../../util/faces.json';
import faces from '../Faces/index.js';

class Game extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        faces,
        Clicked: false
    };
};

    shuffleArray = () => {
        // Shuffle array of objects
        const shuffledArr = this.shuffle(this.state.faces);
        // Setting 'shuffledArr' as the new state
        this.setState({ shuffledArr });
    };

      // Function that takes an array as a parameter and shuffles it
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
    

    handleClick = id => {
        this.shuffleArray();
        this.handleScore(id);
        // console.log(this.state.timesClicked);
      };

      handleScore = id => {
        this.state.faces.forEach(element => {
          if (id === element.id && element.clicked === false) {
            element.clicked = true;
            this.setState({ Clicked: false });
            this.handleIncrement();
          } else if (id === element.id && element.clicked === true) {
            if (this.state.currentScore > this.state.highScore) {
              this.setState({ highScore: this.state.currentScore });
            }
            this.setState({ currentScore: 0 });
            this.setState({ Clicked: true });
            this.state.faces.forEach(element => (element.clicked = false));
            console.log(this.state.faces);
          }
        });
      };


render() {

    console.log(faces)

    return(
        <div className = "game-wrapper">
            <div className = "tiles-div">
                {this.state.faces.map((keyName, i) => (
                            <Tile 
                                Clicked={this.state.Clicked}
                                handleClick={this.handleClick}
                                id={keyName.id}
                                key={i}
                                image={keyName.image}
                            />
                ))}
            </div>
        </div>
    )           
};

//     render() {

//         var oneTile = function(key, image) {
//             this.key = key;
//             this.image = image;
//             this.isFaceUp = false;
//         };

//         oneTile.prototype.draw = function() {
//             if (this.isFaceUp) {
//                 return this.image = selected[j];
//             } else {
//                 return this.image = controller;
//             }
//         };

//         var faces = [
//             donkeykong,
//             mario,
//             banjo,
//             zelda,
//             diddykong,
//             sonic,
//             pacman,
//             luigi,
//             yoshi,
//             link
//         ];

//     // Make an array which has 2 of each, then randomize it
//         var selected = [];
//             for (var i = 0; i < 10; i++) {
//             // Randomly pick one from the array of remaining faces
//             var randomInd = Math.floor(Math.random(faces.length));
//             var tileImage = faces[randomInd];
//             // Push 2 copies onto array
//             selected.push(tileImage);
//             selected.push(tileImage);
//             // Remove from array
//             faces.splice(randomInd, 1);
//         }


// // Now shuffle the elements of that array
// var shuffleArray = function(array) {
//     var counter = array.length;

//     // While there are elements in the array
//     while (counter > 0) {
//         // Pick a random index
//         var ind = Math.floor(Math.random() * counter);
//         // Decrease counter by 1
//         counter--;
//         // And swap the last element with it
//         var temp = array[counter];
//         array[counter] = array[ind];
//         array[ind] = temp;
//     }
// };
// shuffleArray(selected);

//         var tiles = [];

//         for(var j = 0; j < 20; j++) {
//                 var tileKey = j;
//                 var tileFace = selected;
//                 tiles.push(new oneTile(tileKey, tileFace));
//                 tiles[j].draw();
//         }


//     return(
//         <div className = "game-wrapper">
//             <div className = "tiles-div">
//                 {tiles.map((data,index) => {
//                     return (
//                         <div className={"tiles-"+ index}>
//                             <Tile 
//                                 image = {data.image}
//                             />
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
//             }
// }

}


export default Game;